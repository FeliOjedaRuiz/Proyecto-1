class Pikachu {
  constructor(ctx) {
    this.ctx = ctx
    this.name = "Pichaku"
    this.w = 57
    this.h = 47
    this.velocity = 5
    this.totalEnergy = 200
    this.energy = 200
    this.jumpForce = 13

    this.imgframes = 8         
    this.wrimage = "assets/images/characters/pikachu/pikachuWalkRight.png"
    this.wlimage = "assets/images/characters/pikachu/pikachuWalkLeft.png"
    this.srimage = "assets/images/characters/pikachu/pikachuStandsRight.png"
    this.slimage = "assets/images/characters/pikachu/pikachuStandsLeft.png"

    this.punchImage = new Image()
    this.punchImage.src = ""
    this.punchImageRigth = "assets/images/characters/pikachu/punchRight.png"
    this.punchImageLeft = "assets/images/characters/pikachu/punchLeft.png"
    this.punchLarge = 50
    this.punchPower = 8

    this.shootImage = "assets/images/characters/pikachu/bicolorRay.png"
    this.shootAudio = new Audio("assets/audios/rayShoot.mp3")
    this.shootAudio.volume = 0.01
    this.shootVel = 25
    this.shootPower = 1.5
  }
}