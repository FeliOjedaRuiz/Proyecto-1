class Player1 {
  constructor(ctx, char) {
    this.ctx = ctx
    this.char = char
    this.x = 60
    this.y = 150
    this.vx = 0
    this.vy = 0
    this.ax = 0
    this.ay = 0.5
    this.floor = 250
    this.walkSide = "right"
    this.charIs = 
    this.img = new Image()
    this.img.src = `${this.char.img}`
    this.img.frames = this.char.imgframes
    this.img.frameIndex = 
    this.tick = 0  
        
    this.punchTime = 0
    this.punchit = 0

    this.shootTime = 0
    this.shoots = []    
    
    this.injuredImage = new Image()
    this.injuredImage.src = "assets/images/characters/shoots/blood.png"
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * this.img.width / this.img.frames,
      0,
      this.img.width / this.img.frames,
      this.img.height,
      this.x,
      this.y,
      this.char.w,
      this.char.h,
    )

    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.x, this.y - 20, 50, 3)
    this.ctx.fillStyle = 'lime',
    this.ctx.fillRect(this.x, this.y - 20, (50 * (this.char.energy / this.char.totalEnergy)), 3)

    this.shoots.forEach(s => s.draw())

    this.animate()

    this.punchTime--
    if (this.punchTime > 0) {
      if (this.walkSide === "right") {
        this.char.punchImage.src = "assets/images/characters/punchRight.png"
        this.ctx.drawImage(
          this.char.punchImage,
          this.x + this.char.w / 2,
          this.y + this.char.h / 3,
          this.char.h,
          this.char.w / 2,
        )
      } else if (this.walkSide === "left") {
        this.char.punchImage.src = "assets/images/characters/punchLeft.png"
        this.ctx.drawImage(
          this.char.punchImage,
          this.x - this.char.w / 2,
          this.y + this.char.h / 3,
          this.char.h,
          this.char.w / 2,
        )
      }
    }
  }

  animate() {
    this.tick++
    this.shootTime++

    if (this.tick > 10) {
      this.tick = 0;
      this.img.frameIndex++
      if (this.img.frameIndex > this.img.frames - 1) {
        this.img.frameIndex = 0
      }
    }
  }

  move() {
    this.vx += this.ax
    this.vy += this.ay
    this.x += this.vx
    this.y += this.vy

    if (this.y >= this.floor) {
      this.y = this.floor
      this.vy = 0
    } 0

    if (this.x <= 30) {
      this.vx = 0
      this.x = 30
    }

    if (this.x + this.char.w >= this.ctx.canvas.width - 30) {
      this.vx = 0
      this.x = this.ctx.canvas.width - this.char.w - 30
    }

    this.shoots.forEach(s => s.move())
  }

  jump() {
    if (this.y === this.floor) {
      this.vy = -this.char.jumpForce
    }
  }

  shoot() {
    if (this.walkSide === "right") {
      const x = this.x + this.char.w
      const y = this.y + this.char.h / 2
      const vx = this.char.shootVel
      const imgsrc = this.char.shootImage
      const shoot = new Shoot(this.ctx, x, y, vx, imgsrc)
      this.shoots.push(shoot)
    } else if (this.walkSide === "left") {
      const x = this.x - this.char.w
      const y = this.y + this.char.h / 2
      const vx = -this.char.shootVel
      const imgsrc = this.char.shootImage
      const shoot = new Shoot(this.ctx, x, y, vx, imgsrc)
      this.shoots.push(shoot)
    }
  }

  punch() {
    this.punchTime = 10
    this.punchit = 1    
  }

  clear() {
    this.shoots = this.shoots.filter(s => s.isVisible())
  }

  isCollided(player2) {
    const p2 = player2
    p2.shoots.forEach(s => {
      if (s && (this.x + this.char.w) >= s.x && (s.x + s.w) >= this.x && (s.y + s.h) >= this.y && (this.y + this.char.h) >= s.y) {
        this.char.energy -= p2.char.shootPower
        if (player2.walkSide === "right") {
          this.x += p2.char.shootPower * 3
          this.y -= p2.char.shootPower * 3
        } else if (player2.walkSide === "left") {
          this.x -= p2.char.shootPower * 3
          this.y -= p2.char.shootPower * 3
        }
        this.ctx.drawImage(
          this.injuredImage,
          this.x,
          this.y,
          this.char.w,
          this.char.h,
        )
      }
    })
  }

  isInRange(player2){
    const p2 = player2
    if (this.walkSide === "right"){
      if ((p2.x) >= this.x && (this.x + this.char.w + this.char.w/2) >= p2.x
      && (this.y + this.char.h) >= p2.y && this.y <= (p2.y + p2.char.h) && this.punchit === 1) {
        this.punchit = 0
        p2.char.energy -= this.char.punchPower  
        p2.x += this.char.punchPower  
        p2.y -= this.char.punchPower    
      } else {
        this.punchit = 0
      }
    } else if (this.walkSide === "left"){
      if ((p2.x + p2.char.w) >= this.x - this.char.w/2 && (this.x) >= p2.x
      && (this.y + this.char.h) >= p2.y && this.y <= (p2.y + p2.char.h) && this.punchit === 1) {
        this.punchit = 0
        p2.char.energy -= this.char.punchPower
        p2.x -= this.char.punchPower
        p2.y -= this.char.punchPower       
      } else {
        this.punchit = 0
      }
    }
  }

  onKeyDown(key) {
    switch (key) {
      case D:
        this.img.src = `${this.char.wrimage}`
        this.walkSide = "right"
        this.vx = this.char.velocity
        break;
      case A:
        this.img.src = `${this.char.wlimage}`
        this.walkSide = "left"
        this.vx = -this.char.velocity
        break;
      case W:
        this.jump();
        break;
    }
  }

  onKeyUp(key) {
    switch (key) {
      case D:
        this.vx = 0
        this.img.src = `${this.char.srimage}`
        break;
      case A:
        this.vx = 0
        this.img.src = `${this.char.slimage}`
        break;
      case Z:
        if (this.shootTime > 25) {
          this.shootTime = 0
          this.char.shootAudio.load()
          this.shoot()
          this.char.shootAudio.play()
        }
        break;
      case X:
        this.punch()
        break;
    }
  }
}