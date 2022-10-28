let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let count = 0

// increment function
function increment() {
 count = count + 1
 countEl.innerText = count
}
//funtion save
function save() {

  let countStr = count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}

function reset() {
  saveEl.textContent = 'previous entries: '
}

