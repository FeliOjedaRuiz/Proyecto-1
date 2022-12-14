const canvas = document.getElementById("canvaspvp")
const ctx = canvas.getContext("2d")

const game = new Gamepvp(ctx)



const pvpbtn = document.getElementById("start-btn")

canvas.style.display = 'block'
game.start()


pvpbtn.onclick = () => {

    
}

