// Write your code here!

const main = document.querySelector("#main")

main.remove()


const newh1 = document.createElement('h1')
newh1.setAttribute("id", "victory")
document.body.appendChild(newh1)
const newHeader = document.querySelector('h1#victory')
newHeader.innerText = "YOUR-NAME is the champion"
