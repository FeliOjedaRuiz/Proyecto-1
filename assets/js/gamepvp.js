class Gamepvp {
  constructor(ctx) {
    this.ctx = ctx
    this.w = this.ctx.canvas.width
    this.h = this.ctx.canvas.height
    this.ctx.imageSmoothingEnabled = false;
    this.sky = new Sky(ctx)
    this.mountains = new Mountains(ctx)
    this.player1 =
    this.player2 =
    this.p1 = ""
    this.p2 = ""

    this.audio = new Audio("assets/audios/battlefield.mp3")
    this.audio.volume = 0.01
  
  }

  charDefine() {
    if (this.p1 === "Pikachu"){
      this.player1 = new Player1(ctx, (new Pikachu(ctx)))
    } else if (this.p1 === "Bulbasaur"){
      this.player1 = new Player1(ctx, (new Bulbasaur(ctx)))
    } else if (this.p1 === "Charmander"){
      this.player1 = new Player1(ctx, (new Charmander(ctx)))
    } else if (this.p1 === "Squirtle"){
      this.player1 = new Player1(ctx, (new Squirtle(ctx)))
    }
    if (this.p2 === "Pikachu"){
      this.player2 = new Player2(ctx, (new Pikachu(ctx)))
    } else if (this.p2 === "Bulbasaur"){
      this.player2 = new Player2(ctx, (new Bulbasaur(ctx)))
    } else if (this.p2 === "Charmander"){
      this.player2 = new Player2(ctx, (new Charmander(ctx)))
    } else if (this.p2 === "Squirtle"){
      this.player2 = new Player2(ctx, (new Squirtle(ctx)))
    }
  }

  start() {
    this.stop()
    this.audio.play()
    this.initListeners()

    this.interval = setInterval(() => {
      this.clear()
      this.draw()
      this.move()
      this.checkColisions()
      this.playerWin()
    }, 1000 / 60)
  }

  draw() {
    this.sky.draw()
    this.mountains.draw()
    this.player1.draw()
    this.player2.draw()
  }

  move() {
    this.sky.move()
    this.mountains.move()
    this.player1.move()
    this.player2.move()
  }

  initListeners() {
    document.onkeydown = (e) => {
      this.player1.onKeyDown(e.keyCode)
      this.player2.onKeyDown(e.keyCode)
    }

    document.onkeyup = (e) => {
      this.player1.onKeyUp(e.keyCode)
      this.player2.onKeyUp(e.keyCode)
    }

  }

  stop() {
    this.audio.pause()
    clearInterval(this.interval)
  }

  clear() {
    
  }

  checkColisions() {
    this.player1.isCollided(this.player2)
    this.player2.isCollided(this.player1)
    this.player1.isInRange(this.player2)
    this.player2.isInRange(this.player1)
  }


  playerWin() {
    if (this.player1.char.energy <= 0) {
      this.ctx.fillStyle = "#00000080"
      this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
      this.ctx.fillStyle = "#000000"
      this.ctx.font="40pt Arial Black, bold"
      this.ctx.fillText(`${this.char.name} win!!!`, 165, this.ctx.canvas.height/2)
      this.stop()
    } else if (this.player2.char.energy <= 0) {
      this.ctx.fillStyle = "#00000080"
      this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
      this.ctx.fillStyle = "#000000"
      this.ctx.font="40pt Arial Black, bold"
      this.ctx.fillText(`${this.char.name} win!!!`, 165, this.ctx.canvas.height/2)
      this.stop()
    }
  }

}