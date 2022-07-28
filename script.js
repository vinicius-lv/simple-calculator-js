function insertNum(buttonNumber) {
    let resultBox = window.document.querySelector('p#result')
    resultBox.innerHTML += buttonNumber
}

function insertOperator(buttonOperator){
    let resultBox = window.document.querySelector('p#result')
    resultBox.innerHTML += buttonOperator
}

function deleteAllNumbers(){
    window.document.querySelector('p#result').innerHTML = ''
}

function confirmResult(){
    let resultBox = window.document.querySelector('p#result')
    resultBox.innerHTML = eval(resultBox.innerHTML)
    
}