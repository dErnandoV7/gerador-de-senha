// Variáveis
const valueInput = document.querySelector('.valueInput')
const rangeInput = document.querySelector('.sizePassword')
const buttonToGenerate = document.querySelector('.to-generate')
const yourPassWordElement = document.querySelector('.yourPassword')
const caracters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?'

// Atualizar span com o valor do input range
valueInput.textContent = rangeInput.value

function showValueInput() {
    valueInput.textContent = rangeInput.value
}

// Gerar senha
let yourPassword
buttonToGenerate.onclick = () => {
    yourPassword = ''
    for(let i = 0; i < rangeInput.value; i++) {
        const numberRandom = Math.floor(Math.random() * ((caracters.length - 1) - 0 + 1)) + 0
        yourPassword = yourPassword + caracters[numberRandom]
    }
    yourPassWordElement.innerHTML = `<p>${yourPassword}</p><abbr title="Copy"><img src="icon/copy.svg" onclick="copy()"></abbr>`
}

// icone de copiar senha para a área de trabalho
function copy() {
    navigator.clipboard.writeText(yourPassword).then(() => {
        alert('Senha copiada na área de transferência!')
    })
}