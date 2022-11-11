let section = 1
let scrollpos = 0
function mousePos(e){

}



function nextSection(){
    if (window.scrollY != 0){
        window.scrollTo(window.scrollX, window.scrollY + window.innerHeight)
    } else {
        window.scrollTo(window.scrollX, window.innerHeight)
    }
}

let middlecontent = ["Java", "Kotlin", "JavaScript", "Python", "MongoDB", "HTML", "CSS", "Spigot", "Minestom", "Minecraft"]
let wordindex = 0
function type(string, index, deleting){
    if (deleting == false){
        document.getElementById("langs").textContent = string.substring(0, index+1)
        setTimeout(()=> {
            if (index === (string.length)){
                setTimeout(()=>{
                    type(middlecontent[wordindex], index+1, true)
                }, 1000)
            } else {
                type(middlecontent[wordindex], index+1, false)
            }
         }, 250)
    } else {
        if (string.substring(0, string.length - 1).length > 0){
            document.getElementById("langs").textContent = string.substring(0, string.length - 1)
            string = string.substring(0, string.length - 1)
        } else {
            document.getElementById("langs").textContent = "\u200E"
            string = ""
        }
        setTimeout(()=> {
            if (index === 0){
                if (wordindex == 8){
                    wordindex = -1
                }
                type(middlecontent[wordindex+1], index, false)
                wordindex = wordindex+1
            } else {
                type(string, index-1, true)
            }
        }, 100)
    }
}
let running = false
function checkScrollDirection(event) {
    if (!running){
        if (checkScrollDirectionIsUp(event)) {
            section = section - 1
            window.scrollTo(window.scrollX, window.innerHeight * section)
        } else {
            window.scrollTo(window.scrollX, window.scrollY + window.innerHeight)
        }
        running = true
        setTimeout(()=>{
            running = false
        },500)
    }   
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}