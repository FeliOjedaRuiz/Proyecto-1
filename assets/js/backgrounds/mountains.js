class Mountains {
    constructor (ctx) {
        this.ctx = (ctx)

        this.w = this.ctx.canvas.width
        this.h = this.ctx.canvas.height
        this.x = 0
        this.y = 0
        this.vx = 0
        this.vy = 0

        this.mountains = new Image()
        this.mountains.src = "assets/images/backgrounds/mountains.png"
        this.sky = new Image()
        this.sky.src = "assets/images/backgrounds/sky.jpg"  
        
    }

    draw() {
        this.ctx.drawImage(this.sky, this.x, this.y, this.w, this.h)
        
    }

    move() {
        
    }

}