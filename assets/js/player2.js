class Player2 {
  constructor(ctx, char) {
    this.ctx = ctx
    this.char = char    
    this.x = (this.ctx.canvas.width - 60) - this.char.w
    this.y = 150
    this.vx = 0
    this.vy = 0
    this.ax = 0
    this.ay = 0.5
    this.floor = this.ctx.canvas.height * 0.85
    this.isInPlat = false
    this.walkSide = "left"
    this.charIs = 
    this.img = new Image()
    this.img.src = `${this.char.slimage}`
    this.img.frames = this.char.imgframes
    this.img.frameIndex = 
    this.tick = 0  
        
    this.punchTime = 0
    this.punchit = 0
    
    this.shootTime = 0
    this.shoots = []    
    
    this.injuredImage = new Image()
    this.injuredImage.src = "assets/images/characters/blood.png"
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

    this.ctx.fillStyle = 'lime';
    if (this.char.energy < (this.char.totalEnergy / 4) * 3 && this.char.energy > (this.char.totalEnergy / 2)) {
      this.ctx.fillStyle = 'yellow';
    } else if (this.char.energy < this.char.totalEnergy / 2 && this.char.energy > (this.char.totalEnergy / 4)) {
      this.ctx.fillStyle = 'orange';
    } else if (this.char.energy <= (this.char.totalEnergy / 4)) {
      this.ctx.fillStyle = 'red';
    }
    this.ctx.fillRect(this.x, this.y -20, (50 * (this.char.energy / this.char.totalEnergy)), 4)

    this.shoots.forEach(s => s.draw())

    this.animate()

    this.punchTime--
    if (this.punchTime > 0) {
      if (this.walkSide === "right") {
        this.char.punchImage.src = this.char.punchImageRigth
        this.ctx.drawImage(
          this.char.punchImage,
          this.x + this.char.w / 2,
          this.y + this.char.h / 3,
          this.char.h,
          this.char.w / 2,
        )      
      } else if (this.walkSide === "left") {
        this.char.punchImage.src = this.char.punchImageLeft
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
    if (this.tick > 8) {
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

    if ((this.y + this.char.h) >= this.floor) {
      this.y = this.floor - this.char.h
      this.vy = 0
    }

    if (this.x <= 30) {
      this.vx = 0
      this.x = 30
    }

    if (this.x + this.char.w >= this.ctx.canvas.width - 30) {
      this.vx = 0
      this.x = this.ctx.canvas.width - this.char.w - 30
    }

    this.shoots.forEach(r => r.move())
  }

  jump() {
    if (this.y === this.floor - this.char.h || this.isInPlat === true) {
      this.vy = -this.char.jumpForce
    }
  }

  shoot() {
    if (this.walkSide === "right") {
      const x = this.x + this.char.w
      const y = this.y + this.char.h / 2
      const vx = this.char.shootVel
      const imgsrc = this.char.shootImageRight
      const shoot = new Shoot(this.ctx, x, y, vx, imgsrc)
      this.shoots.push(shoot)
    } else if (this.walkSide === "left") {
      const x = this.x - this.char.w
      const y = this.y + this.char.h / 2
      const vx = -this.char.shootVel
      const imgsrc = this.char.shootImageLeft
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

  isCollided(player1) {
    const p1 = player1
    p1.shoots.forEach(s => {
      if (s && (this.x + this.char.w) >= s.x && (s.x + s.w) >= this.x && (s.y + s.h) >= this.y && (this.y + this.char.h) >= s.y) {
        this.char.energy -= p1.char.shootPower
        if (player1.walkSide === "right") {
          this.x += p1.char.shootPower * 3
          this.y -= p1.char.shootPower * 3
        } else if (player1.walkSide === "left") {
          this.x -= p1.char.shootPower * 3
          this.y -= p1.char.shootPower * 3
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

  isInRange(player1){ 
    const p1 = player1
    if (this.walkSide === "right"){
      if ((p1.x) >= this.x && (this.x + this.char.w + this.char.w/2) >= p1.x
      && (this.y + this.char.h) >= p1.y && this.y <= (p1.y + p1.char.h) && this.punchit === 1) {
        this.punchit = 0
        p1.char.energy -= this.char.punchPower  
        p1.x += this.char.punchPower  
        p1.y -= this.char.punchPower      
      } else {
        this.punchit = 0
      }
    } else if (this.walkSide === "left"){
      if ((p1.x + p1.char.w) >= this.x - this.char.w/2 && (this.x) >= p1.x
      && (this.y + this.char.h) >= p1.y && this.y <= (p1.y + p1.char.h) && this.punchit === 1) {
        this.punchit = 0
        p1.char.energy -= this.char.punchPower
        p1.x -= this.char.punchPower
        p1.y -= this.char.punchPower        
      } else {
        this.punchit = 0
      }
    }    
  }

  onKeyDown(key) {
    switch (key) {
      case RIGHT:
        this.img.frames = this.char.walkImgFrames
        this.img.src = `${this.char.wrimage}`
        this.walkSide = "right"
        this.vx = this.char.velocity
        break;
      case LEFT:
        this.img.frames = this.char.walkImgFrames
        this.img.src = `${this.char.wlimage}`
        this.walkSide = "left"
        this.vx = -this.char.velocity
        break;
      case UP:
        this.jump();
        break;
    }
  }

  onKeyUp(key) {
    switch (key) {
      case RIGHT:
        this.img.frames = this.char.imgframes
        this.vx = 0
        this.img.src = `${this.char.srimage}`
        break;
      case LEFT:
        this.img.frames = this.char.imgframes
        this.vx = 0
        this.img.src = `${this.char.slimage}`
        break;
      case FIN:
        if (this.shootTime > 25) {
          this.shootTime = 0
          this.char.shootAudio.load()
          this.shoot()
          this.char.shootAudio.play()
        }
        break;
      case DOWN:
        this.punch()        
        break;
    }
  }
}