let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let restEl = document.getElementById('rest-el')

let count = 0

document.getElementById('increment-btn').addEventListener('click', function(){
  count += 1
  countEl.textContent = count
})

document.getElementById('save-btn').addEventListener('click', function(){

 saveEl.textContent += ` ${count} - `
 count = 0
 countEl.textContent = 0
})

document.getElementById('rest-btn').addEventListener('click', function(){

 saveEl.textContent = `People entries: `
 count = 0
 countEl.textContent = 0
})