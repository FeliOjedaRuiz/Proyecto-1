class Player1 {
  constructor(ctx) {
    this.ctx = ctx

    this.x = 60
    this.y = 150
    this.floor = 250
    this.char = ""

    this.w = 26 * 2
    this.h = 29 * 2
    this.vx = 0
    this.vy = 0
    this.ax = 0
    this.ay = 0.5
    this.totalEnergy = 200
    this.energy = 200
    this.jumpForce = -10

    this.img = new Image()
    this.img.src = "assets/images/characters/pikachuStandsRight.png"
    this.img.frames = 4
    this.img.frameIndex =
    this.tick = 0
    this.shootTime = 0
    this.punchTime = 0
    this.punchit = 0    

    this.walkSide = "right"
    this.wrimage = "assets/images/characters/pikachuWalkRight.png"
    this.wlimage = "assets/images/characters/pikachuWalkLeft.png"
    this.srimage = "assets/images/characters/pikachuStandsRight.png"
    this.slimage = "assets/images/characters/pikachuStandsLeft.png"

    this.punchImage = new Image()
    this.punchImage.src = ""

    this.shoots = []
    this.shootAudio = new Audio("assets/audios/rayShoot.mp3")
    this.shootAudio.volume = 0.01

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
      this.w,
      this.h,
    )

    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.x, this.y - 20, 50, 3)
    this.ctx.fillStyle = 'lime',
      this.ctx.fillRect(this.x, this.y - 20, (50 * (this.energy / this.totalEnergy)), 3)

    this.shoots.forEach(s => s.draw())

    this.animate()

    this.punchTime--
    if (this.punchTime > 0) {
      if (this.walkSide === "right") {
        this.punchImage.src = "assets/images/characters/punchRight.png"
        this.ctx.drawImage(
          this.punchImage,
          this.x + this.w / 2,
          this.y + this.h / 3,
          this.h,
          this.w / 2,
        )

      } else if (this.walkSide === "left") {
        this.punchImage.src = "assets/images/characters/punchLeft.png"
        this.ctx.drawImage(
          this.punchImage,
          this.x - this.w / 2,
          this.y + this.h / 3,
          this.h,
          this.w / 2,
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

    if (this.x + this.w >= this.ctx.canvas.width - 30) {
      this.vx = 0
      this.x = this.ctx.canvas.width - this.w - 30
    }

    this.shoots.forEach(s => s.move())
  }

  jump() {
    if (this.y === this.floor) {
      this.vy = this.jumpForce
    }
  }

  shoot() {
    if (this.walkSide === "right") {
      const x = this.x + this.w
      const y = this.y + this.h / 2
      const vx = 20
      const shoot = new Shoot(this.ctx, x, y, vx)
      this.shoots.push(shoot)
    } else if (this.walkSide === "left") {
      const x = this.x - this.w
      const y = this.y + this.h / 2
      const vx = -20
      const shoot = new Shoot(this.ctx, x, y, vx)
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
    const shts = player2.shoots
    shts.forEach(s => {
      if (s && (this.x + this.w) >= s.x && (s.x + s.w) >= this.x && (s.y + s.h) >= this.y && (this.y + this.h) >= s.y) {
        this.energy -= 1
        if (player2.walkSide === "right") {
          this.x += 3
          this.y -= 2
        } else if (player2.walkSide === "left") {
          this.x -= 3
          this.y -= 2
        }
        this.ctx.drawImage(
          this.injuredImage,
          this.x,
          this.y,
          this.w,
          this.h,
        )
      }
    })
  }

  isInRange(player2){
    const p2 = player2
    if (this.walkSide === "right"){
      if ((p2.x) >= this.x && (this.x + this.w + 20) >= p2.x
      && (this.y + this.h) >= p2.y && this.y <= (p2.y + p2.h) && this.punchit === 1) {
        this.punchit = 0
        p2.energy-=10
        p2.x += 10
        p2.y -= 10   
      } else {
        this.punchit = 0
      }
    } else if (this.walkSide === "left"){
      if ((p2.x + p2.w) >= this.x -20 && (this.x) >= p2.x
      && (this.y + this.h) >= p2.y && this.y <= (p2.y + p2.h) && this.punchit === 1) {
        this.punchit = 0
        p2.energy-=10
        p2.x -= 10
        p2.y -= 10         
      } else {
        this.punchit = 0
      }
    }
  }



  onKeyDown(key) {
    switch (key) {
      case D:
        this.img.src = this.wrimage
        this.walkSide = "right"
        this.vx = 4
        break;
      case A:
        this.img.src = this.wlimage
        this.walkSide = "left"
        this.vx = -4
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
        this.img.src = this.srimage
        break;
      case A:
        this.vx = 0
        this.img.src = this.slimage
        break;
      case Z:
        if (this.shootTime > 25) {
          this.shootTime = 0
          this.shootAudio.load()
          this.shoot()
          this.shootAudio.play()
        }
        break;
      case X:
        this.punch()
        break;
    }
  }

}