class Squirtle {
  constructor(ctx) {
    this.ctx = ctx
    this.name = "Skuaru"
    this.w = 26 * 2
    this.h = 29 * 2
    this.velocity = 4
    this.totalEnergy = 250
    this.energy = 250
    this.jumpForce = 12

    this.img = "assets/images/characters/pikachuStandsRight.png"
    this.imgframes = 4    
         
    this.wrimage = "assets/images/characters/pikachuWalkRight.png"
    this.wlimage = "assets/images/characters/pikachuWalkLeft.png"
    this.srimage = "assets/images/characters/pikachuStandsRight.png"
    this.slimage = "assets/images/characters/pikachuStandsLeft.png"

    this.punchImage = new Image()
    this.punchImage.src = ""
    this.punchImageRigth = "assets/images/characters/pikachu/punchRight.png"
    this.punchImageLeft = "assets/images/characters/pikachu/punchLeft.png"
    this.punchPower = 9

    this.shootImage = "assets/images/characters/shoots/bicolorray.png"
    this.shootAudio = new Audio("assets/audios/rayShoot.mp3")
    this.shootAudio.volume = 0.01
    this.shootVel = 18
    this.shootPower = 1
  }

}