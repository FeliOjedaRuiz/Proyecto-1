class Bulbasaur {
  constructor(ctx) {
    this.ctx = ctx
    this.name = "Bulmasaur"
    this.charImage = "assets/images/characters/charBulbasaur.png"
    this.miniature = new Image()
    this.miniature.src = ""
    this.w = 42 * 1.5
    this.h = 36 * 1.5
    this.velocity = 3.5
    this.totalEnergy = 400
    this.energy = 400
    this.jumpForce = 11

    this.imgframes = 10
    this.walkImgFrames = 5        
    this.wrimage = "assets/images/characters/bulbasaur/bulbasaurWalkRight.png"
    this.wlimage = "assets/images/characters/bulbasaur/bulbasaurWalkLeft.png"
    this.srimage = "assets/images/characters/bulbasaur/bulbasaurStandsRight.png"
    this.slimage = "assets/images/characters/bulbasaur/bulbasaurStandsLeft.png"

    this.punchImage = new Image()
    this.punchImage.src = ""
    this.punchImageRigth = "assets/images/characters/pikachu/punchRight.png"
    this.punchImageLeft = "assets/images/characters/pikachu/punchLeft.png"
    this.punchPower = 11
    this.punchVel = 20

    this.shootImageRight = "assets/images/characters/bulbasaur/hojaNavaja.png"
    this.shootImageLeft = "assets/images/characters/bulbasaur/hojaNavaja.png"
    this.shootAudio = new Audio("assets/audios/rayShoot.mp3")
    this.shootAudio.volume = 0.01
    this.shootVel = 16
    this.shootPower = 1.3
  }
}