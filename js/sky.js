class Sky {
    constructor (ctx) {
        this.ctx = (ctx)

        this.w = this.ctx.canvas.width
        this.h = this.ctx.canvas.height
        this.x = 0
        this.y = 0
        this.vx = 0
        this.vy = 0

        this.sky = new Image()
        this.sky.src = "src/sky.jpg"
                
    }

    draw() {
        this.ctx.drawImage(this.sky, this.x, this.y, this.w, this.h*2/3)
        this.ctx.drawImage(this.sky, this.x + this.w, this.y, this.w, this.h*2/3)
    }

    move() {
        
    }

}