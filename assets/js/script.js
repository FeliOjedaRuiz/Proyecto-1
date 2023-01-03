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


char1.onclick = () =>{
  if (charOnClickCount % 2 === 0) {
    game.p1 = "Pikachu"
    charOnClickCount++
    console.log(`P1 es ${game.p1}`)
  } else if (charOnClickCount % 2 === 1) {
    game.p2 = "Pikachu"
    charOnClickCount++
    console.log(`P2 es ${game.p2}`)   
  }
}

char2.onclick = () =>{
  if (charOnClickCount % 2 === 0) {
    game.p1 = "Bulbasaur"
    charOnClickCount++
    console.log(`P1 es ${game.p1}`)
  } else if (charOnClickCount % 2 === 1) {
    game.p2 = "Bulbasaur"
    charOnClickCount++
    console.log(`P2 es ${game.p2}`)   
  }
}

char3.onclick = () =>{
  if (charOnClickCount % 2 === 0) {
    game.p1 = "Charmander"
    charOnClickCount++
    console.log(`P1 es ${game.p1}`)
  } else if (charOnClickCount % 2 === 1) {
    game.p2 = "Charmander"
    charOnClickCount++
    console.log(`P2 es ${game.p2}`)   
  }
}

char4.onclick = () =>{
  if (charOnClickCount % 2 === 0) {
    game.p1 = "Squirtle"
    charOnClickCount++
    console.log(`P1 es ${game.p1}`)
  } else if (charOnClickCount % 2 === 1) {
    game.p2 = "Squirtle"
    charOnClickCount++
    console.log(`P2 es ${game.p2}`)   
  }
}


pvpbtn.onclick = () => {
  game.charDefine()
  game.plataforms.push(new Plataform(ctx, 390, 345, 300, 25))
  game.plataforms.push(new Plataform(ctx, 150, 245, 300, 25))
  game.plataforms.push(new Plataform(ctx, 630, 245, 300, 25))
  game.plataforms.push(new Plataform(ctx, 60, 420, 960, 150))
  charSelScreen.style.display = 'none' 
  canvas.style.display = 'block'
  game.start()   
}

stopbtn.onclick = () => {
  game.stop()  
    
}

