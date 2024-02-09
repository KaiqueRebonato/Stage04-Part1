//PART 1 

let numberOne = prompt("Digite o seu primeiro número")
let numberTwo = prompt("Digite o seu segundo número")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert(`A soma dos números é ${sum}`)
alert(`A subtração dos números é  ${sub}`)
alert(`A multiplicação dos números é ${multi}`)
alert(`A divisão dos números é ${div}`)
alert(`O restante dos números é ${restDiv}`)

if(sum % 2 === 0) {
  alert("A soma é par.")
} else {
  alert("A soma não é par.")
}

if(numberOne === numberTwo) {
  alert("Os dois números inseridos são iguais")
} else {
  alert("Os dois números inseridos não são iguais")
}

