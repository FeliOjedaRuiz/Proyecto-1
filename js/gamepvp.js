class Gamepvp {
  constructor(ctx) {
    this.ctx = ctx
    this.interval = null
    this.sky = new Sky(ctx)
    this.mountains = new Mountains(ctx)
    this.pikachu = new Pikachu(ctx)
    this.charmander = new Charmander(ctx)
    this.rays = []

    this.audio = new Audio("src/Battlefield.mp3")
    this.audio.volume = 0.02

  }

  start() {
    this.stop()    
    this.initListeners()
    this.audio.play()

    this.interval = setInterval(() => {
      this.clear()
      this.draw()
      this.move()

    }, 1000 / 60)
  }

  draw() {
    this.sky.draw()
    this.mountains.draw()
    this.pikachu.draw()
    this.charmander.draw()

  }

  move() {
    this.sky.move()
    this.mountains.move()
    this.pikachu.move()
    this.charmander.move()

    }

  initListeners() {
    document.onkeydown = (e) => {
      this.pikachu.onKeyDown(e.keyCode)
      this.charmander.onKeyDown(e.keyCode)
    }

    document.onkeyup = (e) => {
      this.pikachu.onKeyUp(e.keyCode)
      this.charmander.onKeyUp(e.keyCode)
    }

    
  }

  stop() {
    this.audio.pause()
    clearInterval(this.interval)
  }

  clear() {
    this.rays = this.rays.filter(r => r.isVisible())
    this.ctx.clearRect(
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.heigth,
    )
  }

  checkCollisions() {

  }

  playerWin() {

  }

}