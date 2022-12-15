const canvas = document.getElementById("canvaspvp")
const ctx = canvas.getContext("2d")

const game = new Gamepvp(ctx)



const pvpbtn = document.getElementById("start-btn")
const stopbtn = document.getElementById("stop-btn")





pvpbtn.onclick = () => {

  canvas.style.display = 'block'
  game.start()
  
    
}

stopbtn.onclick = () => {
  game.stop()  
    
}

