
let div = document.createElement('div')
div.style.backgroundColor = 'black'
div.style.color = 'white'
div.style.width = "3rem"
div.style.height = '2rem'
div.style.borderRadius = "10px"
div.style.textAlign = "center"
div.style.marginBottom = "1rem"
div.style.fontSize = "1rem"



let mon = document.getElementById("monday")
let position1 = document.querySelector('.container #mon')
let before1 = document.querySelector('.container #monday')

let onmouseover1 = function() {
    fetch("data.json")
    .then(response => response.json())
    .then(json => {
      div.innerText = '$' + json[0].amount;    
    })
    position1.insertBefore(div, before1)
}
mon.addEventListener('mouseenter', onmouseover1)
mon.addEventListener('mouseout', function() {
  position1.removeChild(div)
})



let tue = document.getElementById("tuesday")
let position2 = document.querySelector('.container #tue')
let before2 = document.querySelector('.container #tuesday')
let onmouseover2 = function() {
  fetch("data.json")
  .then(response => response.json())
  .then(json => {
    div.innerText = '$' + json[1].amount;    
  })
  position2.insertBefore(div, before2)
}
tue.addEventListener('mouseenter', onmouseover2)
tue.addEventListener('mouseout', function() {
  position2.removeChild(div)
})



let wed = document.getElementById("wednesday")
let position3 = document.querySelector('.container #wed')
let before3 = document.querySelector('.container #wednesday')

let onmouseover3 = function() {
  fetch("data.json")
  .then(response => response.json())
  .then(json => {
    div.innerText = '$' + json[2].amount;    
  })
  position3.insertBefore(div, before3)
}
wed.addEventListener('mouseenter', onmouseover3)
wed.addEventListener('mouseout', function() {
  position3.removeChild(div)
})


let thu = document.getElementById("thursday")
let position4 = document.querySelector('.container #thu')
let before4 = document.querySelector('.container #thursday')

let onmouseover4 = function() {
  fetch("data.json")
  .then(response => response.json())
  .then(json => {
    div.innerText = '$' + json[3].amount;    
  })
  position4.insertBefore(div, before4)
}
thu.addEventListener('mouseenter', onmouseover4)
thu.addEventListener('mouseout', function() {
  position4.removeChild(div)
})

let fri = document.getElementById('friday')
let position5 = document.querySelector('.container #fri')
let before5 = document.querySelector('.container #friday')

let onmouseover5 = function() {
  fetch("data.json")
  .then(response => response.json())
  .then(json => {
    div.innerText = '$' + json[4].amount;    
  })
  position5.insertBefore(div, before5)
}
fri.addEventListener('mouseenter', onmouseover5)
fri.addEventListener('mouseout', function() {
  position5.removeChild(div)
})


let sat = document.getElementById('saturday')
let position6 = document.querySelector('.container #sat')
let before6 = document.querySelector('.container #saturday')

let onmouseover6 = function() {
  fetch("data.json")
  .then(response => response.json())
  .then(json => {
    div.innerText = '$' + json[5].amount;    
  })
  position6.insertBefore(div, before6)
}
sat.addEventListener('mouseenter', onmouseover6)
sat.addEventListener('mouseout', function() {
  position6.removeChild(div)
})



let sun = document.getElementById('sunday')
let position7 = document.querySelector('.container #sun')
let before7 = document.querySelector('.container #sunday')

let onmouseover7 = function() {
  fetch("data.json")
  .then(response => response.json())
  .then(json => {
    div.innerText = '$' + json[6].amount;    
  })
  position7.insertBefore(div, before7)
}
sun.addEventListener('mouseenter', onmouseover7)
sun.addEventListener('mouseout', function() {
  position7.removeChild(div)
})
