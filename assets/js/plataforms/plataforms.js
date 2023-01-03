class Plataform {
    constructor (ctx, x, y, w, h) {
        this.ctx = (ctx)
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.plataformImg = new Image()
        this.plataformImg.src = "assets/images/backgrounds/mountainsPlataform.png"                
    }

    draw() {
        this.ctx.drawImage(this.plataformImg, this.x, this.y, this.w, this.h)
    }

}

