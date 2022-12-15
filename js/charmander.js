class Charmander {
    constructor(ctx) {
      this.ctx = ctx
  
      this.x = 560 
      this.y = 150
      this.floor = 250
      this.w = 26*2
      this.h = 29*2
      this.vx = 0
      this.vy = 0
      this.ax = 0
      this.ay = 0.5
  
      this.img = new Image()
      this.img.src = "src/pikachuStandsLeft.png"
      this.img.frames = 4
      this.img.frameIndex = 
      this.tick = 0
      this.walkSide = "right" 
  
      this.flames = []
      
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
  
      this.flames.forEach(r => r.draw())
  
      this.animate()
  
    }
  
    animate() {
      this.tick++
  
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
      }0
  
      if (this.x <= 30) {
        this.vx = 0
        this.x = 30
      }
  
      if (this.x + this.w >= this.ctx.canvas.width - 30) {
        this.vx = 0
        this.x = this.ctx.canvas.width - this.w - 30
      }
  
      this.flames.forEach(f => f.move())
  
    }
  
    jump(){
      if (this.y === this.floor) {
        this.vy = -10
      }
    }
  
    shoot(){
      if (this.walkSide === "right") {
        const x = this.x + this.w
        const y = this.y + this.h/2
        const vx = 20
        const flame = new Flame(this.ctx, x, y, vx)
        this.flames.push(flame)
      } else if (this.walkSide === "left") {
        const x = this.x
        const y = this.y + this.h/2
        const vx = -20
        const flame = new Flame(this.ctx, x, y, vx)
        this.flames.push(flame)
      }
        
    }
  
    onKeyDown(key) {
      switch(key) {
        case D:
          this.img.src = "src/pikachuWalkRight.png"
          this.walkSide = "right"
          this.vx = 4
          break;
        case A:
          this.img.src = "src/pikachuWalkLeft.png"
          this.walkSide = "left"
          this.vx = -4
          break;
        case W:
          this.jump();
          break;
        case Z:
          this.shoot()
          break;
         
      }
    }
  
    onKeyUp(key) {
      switch(key) {
        case D:
          this.vx = 0
          this.img.src = "src/pikachuStandsRight.png"
          break;
        case A:
          this.vx = 0
          this.img.src = "src/pikachuStandsLeft.png"
          break;
      }
    }
  
  
  }