const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const umnojit = document.getElementById('umnojit')
const delenie = document.getElementById('delenie')
const conclusion = document.getElementById('conclusion')
const calculate = document.getElementById('calculate')
const conclusion1 = document.getElementById('conclusion1')
const sum = document.getElementById('sum')
const black = document.getElementById('black')
const white = document.getElementById('white')
const body = document.getElementById('body')
const h2 = document.getElementById('h2')

let action = '+'

plus.onclick = function () {
    action = '+'
}

minus.onclick = function () {
    action = '-'
}

delenie.onclick = function () {
    action = '/'
}

umnojit.onclick = function () {
    action = '*'
}

calculate.onclick = function () {
    if(action == '+') {
        const sum = Number(input1.value) + Number(input2.value)
        conclusion1.textContent = sum
    }
    else if(action == '-') {
        const sum = Number(input1.value) - Number(input2.value)
        conclusion1.textContent = sum
    }else if(action == '*') {
        const sum = Number(input1.value) * Number(input2.value)
        conclusion1.textContent = sum
    }else if(action == '/') {
        const sum = Number(input1.value) / Number(input2.value)
        conclusion1.textContent = sum
    }
}

let color = 'black'

let color1 = 'white'

black.onclick = function () {
    if(color == 'black') {
        body.style.backgroundColor = 'black'
        body.style.transition = '0.5s'
        plus.style.backgroundColor = 'red'
        plus.style.transition = '0.5s'
        minus.style.backgroundColor = 'red'
        minus.style.transition = '0.5s'
        umnojit.style.backgroundColor = 'red'
        umnojit.style.transition = '0.5s'
        delenie.style.backgroundColor = 'red'
        delenie.style.transition = '0.5s'
        h2.style.color = 'red'
        h2.style.transition = '0.5s'
    }
}

white.onclick = function () {
    if(color1 == 'white') {
        body.style.backgroundColor = 'slategray'
        body.style.transition = '0.5s'
        plus.style.backgroundColor = 'royalblue'
        plus.style.transition = '0.5s'
        minus.style.backgroundColor = 'royalblue'
        minus.style.transition = '0.5s'
        umnojit.style.backgroundColor = 'royalblue'
        umnojit.style.transition = '0.5s'
        delenie.style.backgroundColor = 'royalblue'
        delenie.style.transition = '0.5s'
        h2.style.color = 'darkblue'
        h2.style.transition = '0.5s'
    }
}