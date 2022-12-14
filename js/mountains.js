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
        this.mountains.src = "src/mountains.png"  
        
    }

    draw() {
        this.ctx.drawImage(this.mountains, this.x, this.h/2, this.w, this.h/2)
        this.ctx.drawImage(this.mountains, this.x + this.w, this.h/2, this.w, this.h/2)
    }

    move() {
        
    }

}