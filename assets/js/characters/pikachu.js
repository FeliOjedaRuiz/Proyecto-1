class Pikachu {
  constructor(ctx) {
    this.ctx = ctx
    this.name = "Pichaku"
    this.charImage = "assets/images/characters/charPikachu.png"
    this.miniature = new Image()
    this.miniature.src = ""
    this.w = 57
    this.h = 47
    this.velocity = 7
    this.totalEnergy = 300
    this.energy = 300
    this.jumpForce = 13

    this.imgframes = 8
    this.walkImgFrames = 5         
    this.wrimage = "assets/images/characters/pikachu/pikachuWalkRight.png"
    this.wlimage = "assets/images/characters/pikachu/pikachuWalkLeft.png"
    this.srimage = "assets/images/characters/pikachu/pikachuStandsRight.png"
    this.slimage = "assets/images/characters/pikachu/pikachuStandsLeft.png"

    this.punchImage = new Image()
    this.punchImage.src = ""
    this.punchImageRigth = "assets/images/characters/pikachu/punchRight.png"
    this.punchImageLeft = "assets/images/characters/pikachu/punchLeft.png"
    this.punchPower = 8
    this.punchVel = 8

    this.shootImageRight = "assets/images/characters/pikachu/bicolorRay.png"
    this.shootImageLeft = "assets/images/characters/pikachu/bicolorRay.png"
    this.shootAudio = new Audio("assets/audios/rayShoot.mp3")
    this.shootAudio.volume = 0.1
    this.shootVel = 25
    this.shootPower = 1.5
  }
}