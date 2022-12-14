class Player {
  constructor(ctx) {
    this.ctx = ctx

    this.x = 60
    this.y = 150
    this.floor = 250
    this.w = 26*2
    this.h = 29*2
    this.vx = 0
    this.vy = 0
    this.ax = 0
    this.ay = 0.5

    this.img = new Image()
    this.img.src = "src/pikachuWalkRigth2.png"
    this.img.frames = 4
    this.img.frameIndex = 
    this.tick = 0

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

    this.animate()

  }

  animate() {
    this.tick++

    if (this.tick > 15) {
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
    }0

    if (this.x <= 30) {
      this.vx = 0
      this.x = 30
    }

    if (this.x + this.w >= this.ctx.canvas.width - 30) {
      this.vx = 0
      this.x = this.ctx.canvas.width - this.w - 30
    }

  }

  jump(){
    if (this.y === this.floor) {
      this.vy = -10
    }
  }

  shoot(){

  }

  onKeyDown(key) {
    switch(key) {
      case RIGHT:
        this.img.src = "src/pikachuWalkRigth2.png"
        this.vx = 4
        break;
      case LEFT:
        this.img.src = "src/pikachuWalkLeft2.png"
        this.vx = -4
        break;
      case UP:
        this.jump();
        break;
      case SPACE:
        this.shoot()
       
    }
  }

  onKeyUp(key) {
    switch(key) {
      case RIGHT:
      case LEFT:
        this.vx = 0
        break;
    }
  }


}