class Charmander {
  constructor(ctx) {
    this.ctx = ctx
    this.name = "Chandarmer"
    this.charImage = "assets/images/characters/charCharmander.png"
    this.miniature = new Image()
    this.miniature.src = ""
    this.w = 46 * 1.5
    this.h = 36 * 1.5
    this.velocity = 4.5
    this.totalEnergy = 350
    this.energy = 350
    this.jumpForce = 12
    
    this.imgframes = 6
    this.walkImgFrames = 8        
    this.wrimage = "assets/images/characters/charmander/charmanderWlakRight.png"
    this.wlimage = "assets/images/characters/charmander/charmanderWlakLeft.png"
    this.srimage = "assets/images/characters/charmander/charmanderStandsRight.png"
    this.slimage = "assets/images/characters/charmander/charmanderStandsLeft.png"

    this.punchImage = new Image()
    this.punchImage.src = ""
    this.punchImageRigth = "assets/images/characters/pikachu/punchRight.png"
    this.punchImageLeft = "assets/images/characters/pikachu/punchLeft.png"
    this.punchPower = 9
    this.punchVel = 9

    this.shootImageRight = "assets/images/characters/charmander/flamesRight.png"
    this.shootImageLeft = "assets/images/characters/charmander/flamesLeft.png"
    this.shootAudio = new Audio("assets/audios/fireBall.mp3")
    this.shootAudio.volume = 0.5
    this.shootVel = 16
    this.shootPower = 1.3
  }

}