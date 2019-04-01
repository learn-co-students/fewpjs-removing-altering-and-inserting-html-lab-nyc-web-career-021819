document.getElementById('main').remove()

let newHeader = document.createElement('h1')
newHeader.id = 'victory'

// newHeader.innerHTML = "YOUR-NAME is the champion"

// let words = document.getElementById('h1#victory');

document.body.appendChild(newHeader)
newHeader.innerText = "YOUR-NAME is the champion"
