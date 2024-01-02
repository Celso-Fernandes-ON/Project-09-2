// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOneSum = 52
let numberTwoSum = 45
alert(numberOneSum + numberTwoSum)

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let isNumber = 45
if(typeof(isNumber) === 'number'){
    alert("É um número")
}
else{
    alert("Não é um número")
}

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let isString = "hello"
if(typeof(isString) === 'string'){
    alert("É uma string")
}
else{
    alert("Não é uma string")
}
alert(typeof(isString))

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let isBoolean = false
if(typeof(isBoolean) === "boolean"){
    alert("É um Booleano")
}
else{
    alert("Não é um Booleano")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let numberOneSub = 52
let numberTwoSub = 45
let sub = numberOneSub - numberTwoSub
alert(sub)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let numberOneMulti = 52
let numberTwoMulti = 45
let multi = numberOneMulti * numberTwoMulti
alert(multi)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let numberOneDivision = 52
let numberTwoDivision = 45
let division = numberOneDivision / numberTwoDivision
alert(division.toFixed(2))

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let evenOrNot = 45
if((evenOrNot % 2 == 0)){
    alert("É um número par")
}
else{
    alert("Não é um número par")
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let oddOrNot = 46
if((oddOrNot) % 2 == 1 ){
    alert("É um número ímpar")
}
else{
    alert("Não é um número ímpar")
}