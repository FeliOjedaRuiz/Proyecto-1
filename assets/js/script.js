const canvas = document.getElementById("canvaspvp")
const ctx = canvas.getContext("2d")

const game = new Gamepvp(ctx)

let charOnClickCount = 0

const charSelScreen = document.getElementById("selectionScreen")
const pvpbtn = document.getElementById("start-btn")
const stopbtn = document.getElementById("stop-btn")
const char1 = document.getElementById("char1")
const char2 = document.getElementById("char2")
const char3 = document.getElementById("char3")
const char4 = document.getElementById("char4")

const char1P1 = document.getElementById("char1P1")
const char1P2 = document.getElementById("char1P2")
const char2P1 = document.getElementById("char2P1")
const char2P2 = document.getElementById("char2P2")
const char3P1 = document.getElementById("char3P1")
const char3P2 = document.getElementById("char3P2")
const char4P1 = document.getElementById("char4P1")
const char4P2 = document.getElementById("char4P2")

const textPlayerSelct = document.getElementById('textPlayerSelct')

function changeStyleCharP1() {
  char1P1.style.display = 'none'
  char2P1.style.display = 'none'
  char3P1.style.display = 'none'
  char4P1.style.display = 'none'
}

function changeStyleCharP2() {
  char1P2.style.display = 'none'
  char2P2.style.display = 'none'
  char3P2.style.display = 'none'
  char4P2.style.display = 'none'
}


changeStyleCharP1()
changeStyleCharP2()


char1.onclick = () =>{
  if (charOnClickCount % 2 === 0) {
    changeStyleCharP1()
    char1P1.style.display = 'inline';   
    game.p1 = "Pikachu"
    charOnClickCount++
    textPlayerSelct.innerText = "Player 2 select character"
    textPlayerSelct.style.color = "Blue"
  } else if (charOnClickCount % 2 === 1) {
    changeStyleCharP2()
    char1P2.style.display = 'inline'; 
    game.p2 = "Pikachu"
    charOnClickCount++
    textPlayerSelct.innerText = "Player 1 select character"
    textPlayerSelct.style.color = "Red"  
  }
}

char2.onclick = () =>{
  if (charOnClickCount % 2 === 0) {
    changeStyleCharP1()
    char2P1.style.display = 'inline'; 
    game.p1 = "Bulbasaur"
    charOnClickCount++
    textPlayerSelct.innerText = "Player 2 select character"
    textPlayerSelct.style.color = "Blue"
  } else if (charOnClickCount % 2 === 1) {
    changeStyleCharP2()
    char2P2.style.display = 'inline'; 
    game.p2 = "Bulbasaur"
    charOnClickCount++
    textPlayerSelct.innerText = "Player 1 select character"
    textPlayerSelct.style.color = "Red"  
  }
}

char3.onclick = () =>{
  if (charOnClickCount % 2 === 0) {
    changeStyleCharP1()
    char3P1.style.display = 'inline'; 
    game.p1 = "Charmander"
    charOnClickCount++
    textPlayerSelct.innerText = "Player 2 select character"
    textPlayerSelct.style.color = "Blue"
  } else if (charOnClickCount % 2 === 1) {
    changeStyleCharP2()
    char3P2.style.display = 'inline'; 
    game.p2 = "Charmander"
    charOnClickCount++
    textPlayerSelct.innerText = "Player 1 select character"
    textPlayerSelct.style.color = "Red"  
  }
}

char4.onclick = () =>{
  if (charOnClickCount % 2 === 0) {
    changeStyleCharP1()
    char4P1.style.display = 'inline'; 
    game.p1 = "Squirtle"
    charOnClickCount++
    textPlayerSelct.innerText = "Player 2 select character"
    textPlayerSelct.style.color = "Blue"
  } else if (charOnClickCount % 2 === 1) {
    changeStyleCharP2()
    char4P2.style.display = 'inline'; 
    game.p2 = "Squirtle"
    charOnClickCount++
    textPlayerSelct.innerText = "Player 1 select character"
    textPlayerSelct.style.color = "Red"
  }
}


pvpbtn.onclick = () => {
  game.charDefine()
  game.plataforms.push(new Floor(ctx, 80, 420, 920, 150))
  game.plataforms.push(new Plataform(ctx, 390, 310, 300, 25))
  game.plataforms.push(new Plataform(ctx, 150, 180, 300, 25))
  game.plataforms.push(new Plataform(ctx, 630, 180, 300, 25))
  charSelScreen.style.display = 'none' 
  canvas.style.display = 'block'
  game.start()   
}

stopbtn.onclick = () => {
  game.stop()      
}

