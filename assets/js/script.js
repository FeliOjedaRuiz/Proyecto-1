const canvas = document.getElementById("canvaspvp")
const ctx = canvas.getContext("2d")

const game = new Gamepvp(ctx)

audio = new Audio("assets/audios/battlefield.mp3")
audio.volume = 0.01


const playbtn = document.getElementById("play-btn")
const frontPage = document.getElementById("frontPage")
const charSelScreen = document.getElementById("selectionScreen")

playbtn.onclick = () => {
  frontPage.style.display = 'none'  
  charSelScreen.style.marginTop = '100px'
  audio.play()  
}


const pvpbtn = document.getElementById("start-btn")
const pausebtn = document.getElementById("pause-btn")
const continuebtn = document.getElementById("continue-btn")
const restartbtn = document.getElementById("restart-btn")


let charOnClickCount = 0

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


function checkSelection(){
  if(game.p1 !== "" && game.p2 !== ""){
    pvpbtn.style.visibility = 'visible';
  }
}

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
    textPlayerSelct.style.color = "#1300B8"
  } else if (charOnClickCount % 2 === 1) {
    changeStyleCharP2()
    char1P2.style.display = 'inline'; 
    game.p2 = "Pikachu"
    charOnClickCount++
    textPlayerSelct.innerText = "Player 1 select character"
    textPlayerSelct.style.color = "#E50000"  
  }
  checkSelection()
}

char2.onclick = () =>{
  if (charOnClickCount % 2 === 0) {
    changeStyleCharP1()
    char2P1.style.display = 'inline'; 
    game.p1 = "Bulbasaur"
    charOnClickCount++
    textPlayerSelct.innerText = "Player 2 select character"
    textPlayerSelct.style.color = "#1300B8"
  } else if (charOnClickCount % 2 === 1) {
    changeStyleCharP2()
    char2P2.style.display = 'inline'; 
    game.p2 = "Bulbasaur"
    charOnClickCount++
    textPlayerSelct.innerText = "Player 1 select character"
    textPlayerSelct.style.color = "#E50000"  
  }
  checkSelection()
}

char3.onclick = () =>{
  if (charOnClickCount % 2 === 0) {
    changeStyleCharP1()
    char3P1.style.display = 'inline'; 
    game.p1 = "Charmander"
    charOnClickCount++
    textPlayerSelct.innerText = "Player 2 select character"
    textPlayerSelct.style.color = "#1300B8"
  } else if (charOnClickCount % 2 === 1) {
    changeStyleCharP2()
    char3P2.style.display = 'inline'; 
    game.p2 = "Charmander"
    charOnClickCount++
    textPlayerSelct.innerText = "Player 1 select character"
    textPlayerSelct.style.color = "#E50000"  
  }
  checkSelection()
}

char4.onclick = () =>{
  if (charOnClickCount % 2 === 0) {
    changeStyleCharP1()
    char4P1.style.display = 'inline'; 
    game.p1 = "Squirtle"
    charOnClickCount++
    textPlayerSelct.innerText = "Player 2 select character"
    textPlayerSelct.style.color = "#1300B8"
  } else if (charOnClickCount % 2 === 1) {
    changeStyleCharP2()
    char4P2.style.display = 'inline'; 
    game.p2 = "Squirtle"
    charOnClickCount++
    textPlayerSelct.innerText = "Player 1 select character"
    textPlayerSelct.style.color = "#E50000"
  }
  checkSelection()
}


pvpbtn.onclick = () => {
  game.charDefine()
  game.plataforms.push(new Floor(ctx, 80, 420, 920, 150))
  game.plataforms.push(new Plataform(ctx, 390, 310, 300, 25))
  game.plataforms.push(new Plataform(ctx, 150, 180, 300, 25))
  game.plataforms.push(new Plataform(ctx, 630, 180, 300, 25))
  charSelScreen.style.display = 'none' 
  canvas.style.display = 'block'
  pausebtn.style.visibility = 'visible'
  restartbtn.style.visibility = 'visible'
  game.start()   
}

pausebtn.onclick = () => {
  game.stop()
  pausebtn.style.visibility = 'hidden'
  continuebtn.style.visibility = 'visible'
}

continuebtn.onclick = () => {
  game.start()
  pausebtn.style.visibility = 'visible'
  continuebtn.style.visibility = 'hidden'
}

restartbtn.onclick = () => {
  window.location.reload()
}

