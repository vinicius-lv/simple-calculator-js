function insertNum(buttonNumber) {
    let resultBox = window.document.querySelector('p#calc-result')
    resultBox.innerHTML += buttonNumber
}

function insertOperator(buttonOperator) {
    let resultBox = window.document.querySelector('p#calc-result')
    resultBox.innerHTML += buttonOperator
}

function deleteAllNumbers() {
    window.document.querySelector('p#calc-result').innerHTML = ''
}

function backspace() {
    let resultBox = window.document.querySelector('p#calc-result').innerHTML
    window.document.querySelector('p#calc-result').innerHTML = resultBox.substring(0, resultBox.length - 1)
}

function confirmOperation() {
    let resultBox = window.document.querySelector('p#calc-result')
    resultBox.innerHTML = eval(resultBox.innerHTML)
}