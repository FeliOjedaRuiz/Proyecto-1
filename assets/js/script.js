const canvas = document.getElementById("canvaspvp")
const ctx = canvas.getContext("2d")

const game = new Gamepvp(ctx)



const pvpbtn = document.getElementById("start-btn")
const stopbtn = document.getElementById("stop-btn")
const char1 = document.getElementById("char1")
const char2 = document.getElementById("char2")
const char3 = document.getElementById("char3")
const char4 = document.getElementById("char4")


char1.onclick = () =>{

}


pvpbtn.onclick = () => {
  canvas.style.display = 'block'
  game.start()   
}

stopbtn.onclick = () => {
  game.stop()  
    
}

