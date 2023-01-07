class Floor {
    constructor (ctx, x, y, w, h) {
        this.ctx = (ctx)
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.floorImg = new Image()
        this.floorImg.src = "assets/images/backgrounds/mountainsFloor.png"                
    }

    draw() {
        this.ctx.drawImage(this.floorImg, this.x, this.y, this.w, this.h)
    }

}

