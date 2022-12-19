class Flame {
    constructor(ctx, x, y, vx) {
      this.ctx = ctx
  
      this.x = x
      this.y = y
      this.w = 50
      this.h = 23
      this.vx = vx
      this.vy = 0
      this.ax = 0
      this.ay = 0
  
      this.img = new Image()
      this.img.src = "src/rayobicolor.png"
      this.img.frames = 2
      this.img.frameIndex = 0
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
  
    move() {
      this.vx += this.ax
      this.vy += this.ay
      this.x += this.vx
      this.y += this.vy
  
      if (this.y > 250) { 
        this.vy *= -1
      }
    }
  
    animate() {
      this.tick++
  
      if (this.tick > 1) {
        this.tick = 0;
        this.img.frameIndex++
  
        if (this.img.frameIndex > this.img.frames - 1) {
          this.img.frameIndex = 0
        }
      }
    }
  
    isVisible() {
      return this.x + this.w >= 0 && this.x <= this.ctx.canvas.width
    }
  
  
  }