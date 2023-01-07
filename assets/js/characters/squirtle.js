class Squirtle {
  constructor(ctx) {
    this.ctx = ctx
    this.name = "Skuaru"
    this.charImage = "assets/images/characters/charSquirtle.png"
    this.miniature = new Image()
    this.miniature.src = ""
    this.w = 43 * 1.5
    this.h = 40 * 1.5
    this.velocity = 4
    this.totalEnergy = 360
    this.energy = 360
    this.jumpForce = 12

    this.imgframes = 6
    this.walkImgFrames = 6         
    this.wrimage = "assets/images/characters/squirtle/squirtleWalkRight.png"
    this.wlimage = "assets/images/characters/squirtle/squirtleWalkLeft.png"
    this.srimage = "assets/images/characters/squirtle/squirtleStandsRight.png"
    this.slimage = "assets/images/characters/squirtle/squirtleStandsLeft.png"

    this.punchImage = new Image()
    this.punchImage.src = ""
    this.punchImageRigth = "assets/images/characters/pikachu/punchRight.png"
    this.punchImageLeft = "assets/images/characters/pikachu/punchLeft.png"
    this.punchPower = 9
    this.punchVel = 10

    this.shootImageRight = "assets/images/characters/squirtle/burbujasRight.png"
    this.shootImageLeft = "assets/images/characters/squirtle/burbujasLeft.png"
    this.shootAudio = new Audio("assets/audios/rayShoot.mp3")
    this.shootAudio.volume = 0.01
    this.shootVel = 12
    this.shootPower = 1
  }

}