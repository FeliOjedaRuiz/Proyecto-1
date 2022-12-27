class Charmander {
  constructor(ctx) {
    this.ctx = ctx
    this.name = "Chandarmer"
    this.w = 26 * 2
    this.h = 29 * 2
    this.velocity = 5
    this.totalEnergy = 230
    this.energy = 230
    this.jumpForce = 9

    this.img = "assets/images/characters/pikachuStandsRight.png"
    this.imgframes = 4    
         
    this.wrimage = "assets/images/characters/pikachuWalkRight.png"
    this.wlimage = "assets/images/characters/pikachuWalkLeft.png"
    this.srimage = "assets/images/characters/pikachuStandsRight.png"
    this.slimage = "assets/images/characters/pikachuStandsLeft.png"

    this.punchImage = new Image()
    this.punchImage.src = ""
    this.punchPower = 9

    this.shootImage = "assets/images/characters/shoots/bicolorray.png"
    this.shootAudio = new Audio("assets/audios/rayShoot.mp3")
    this.shootAudio.volume = 0.01
    this.shootVel = 20
    this.shootPower = 1.3
  }

}