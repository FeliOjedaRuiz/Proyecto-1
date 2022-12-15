class Gamepvp {
  constructor(ctx) {
    this.ctx = ctx
    this.interval = null
    this.sky = new Sky(ctx)
    this.mountains = new Mountains(ctx)
    this.player = new Player(ctx)
    this.audio = new Audio("src/Battlefield.mp3")
    this.audio.volume = 0.02

  }

  start() {
    
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
    this.player.draw()

  }

  move() {
    this.sky.move()
    this.mountains.move()
    this.player.move()

    }

  initListeners() {
    document.onkeydown = (e) => {
      this.player.onKeyDown(e.keyCode)
    }

    document.onkeyup = (e) => {
      this.player.onKeyUp(e.keyCode)
    }
  }

  stop() {

  }

  clear() {

  }

  checkCollisions() {

  }

  playerWin() {

  }

}