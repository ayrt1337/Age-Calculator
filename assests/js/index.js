const botao = document.getElementById('btn')
const input = document.getElementsByClassName('input')
const alert = document.getElementsByClassName('alert')
const titulo = document.getElementsByClassName('tittle')
const resultado = document.getElementsByClassName('resultado')
const dataInvalida = document.getElementsByClassName('date')
const dataInvalida2 = document.getElementsByClassName('data')
const passado = document.getElementsByClassName('passado')
const imagem = document.getElementsByTagName('img')


botao.addEventListener('click', () => {
    if(window.innerWidth < 800){
        imagem[0].style.top = '20%'
    }
    if(window.innerWidth < 500){
        imagem[0].style.top = '22%'
    }
    var dataAtual = new Date()
    for(let i = 0; i < input.length; i++){
        if(input[i].value === ''){
            input[i].classList.add('naoValidado')

            for(let j = 0; j < input.length; j++){
                if(input[i].parentElement === alert[j].parentElement){
                    dataInvalida[j].classList.remove('invalidDateMostrar')
                    dataInvalida[j].classList.add('invalidDateNaoMostrar')
                    alert[j].classList.add('alertMostrar')
                    alert[j].classList.remove('alertNaoMostrar')
                    titulo[j].classList.add('naoValidado')
                    dataInvalida2[0].classList.remove('dataMostrar')
                    dataInvalida2[0].classList.add('dataNaoMostrar')
                    resultado[0].innerHTML = '--'
                    resultado[1].innerHTML = '--'
                    resultado[2].innerHTML = '--'
                    passado[0].classList.remove('passadoMostrar')
                    passado[0].classList.add('passadoNaoMostrar')
                }
            }
        }
        else if(input[i].value !== ''){
            if(input[i] === input[2] && input[i].value <= 0){
                input[2].classList.add('naoValidado')
                alert[2].classList.add('alertNaoMostrar')
                alert[2].classList.remove('alertMostrar')
                dataInvalida[2].classList.add('invalidDateMostrar')
                dataInvalida[2].classList.remove('invalidDateNaoMostrar')
                titulo[2].classList.add('naoValidado')
                dataInvalida2[0].classList.remove('dataMostrar')
                dataInvalida2[0].classList.add('dataNaoMostrar')
                resultado[0].innerHTML = '--'
                resultado[1].innerHTML = '--'
                resultado[2].innerHTML = '--'
                passado[0].classList.remove('passadoMostrar')
                passado[0].classList.add('passadoNaoMostrar')

            }
            else if(input[i] === input[1] && (input[i].value > 12 || input[i].value <= 0)){
                input[1].classList.add('naoValidado')
                alert[1].classList.add('alertNaoMostrar')
                alert[1].classList.remove('alertMostrar')
                dataInvalida[1].classList.add('invalidDateMostrar')
                dataInvalida[1].classList.remove('invalidDateNaoMostrar')
                titulo[1].classList.add('naoValidado')
                dataInvalida2[0].classList.remove('dataMostrar')
                dataInvalida2[0].classList.add('dataNaoMostrar')
                resultado[0].innerHTML = '--'
                resultado[1].innerHTML = '--'
                resultado[2].innerHTML = '--'
                passado[0].classList.remove('passadoMostrar')
                passado[0].classList.add('passadoNaoMostrar')
            }
            else if(input[i] === input[0] && (input[i].value > 31 || input[i].value <= 0)){
                input[0].classList.add('naoValidado')
                alert[0].classList.add('alertNaoMostrar')
                alert[0].classList.remove('alertMostrar')
                dataInvalida[0].classList.add('invalidDateMostrar')
                dataInvalida[0].classList.remove('invalidDateNaoMostrar')
                titulo[0].classList.add('naoValidado')
                dataInvalida2[0].classList.remove('dataMostrar')
                dataInvalida2[0].classList.add('dataNaoMostrar')
                resultado[0].innerHTML = '--'
                resultado[1].innerHTML = '--'
                resultado[2].innerHTML = '--'
                passado[0].classList.remove('passadoMostrar')
                passado[0].classList.add('passadoNaoMostrar')
            }
            else{
                input[i].classList.remove('naoValidado')

                for(let j = 0; j < input.length; j++){
                    if(input[i].parentElement === alert[j].parentElement){
                        dataInvalida[j].classList.add('invalidDateNaoMostrar')
                        dataInvalida[j].classList.remove('invalidDateMostrar')
                        alert[j].classList.add('alertNaoMostrar')
                        alert[j].classList.remove('alertMostrar')
                        titulo[j].classList.remove('naoValidado')
                        dataInvalida2[0].classList.remove('dataMostrar')
                        dataInvalida2[0].classList.add('dataNaoMostrar')
                        passado[0].classList.remove('passadoMostrar')
                        passado[0].classList.add('passadoNaoMostrar')
                    }
                }
            }
        }
    }
    if(input[0].value != '' && input[1].value != '' && input[2].value != ''){
        if(dataInvalida[0].getAttribute('class') != 'date invalidDateMostrar' && 
           dataInvalida[1].getAttribute('class') != 'date invalidDateMostrar' &&
           dataInvalida[2].getAttribute('class') != 'date invalidDateMostrar' &&
           alert[0].getAttribute('class') != 'alert alertMostrar' &&
           alert[1].getAttribute('class') != 'alert alertMostrar' &&
           alert[2].getAttribute('class') != 'alert alertMostrar' &&
           titulo[0].getAttribute('class') != 'tittle naoValidado' &&
           titulo[1].getAttribute('class') != 'tittle naoValidado' &&
           titulo[2].getAttribute('class') != 'tittle naoValidado' &&
           dataInvalida2[0].getAttribute('class') != 'data dataMostrar' &&
           passado[0].getAttribute('class') != 'passado passadoMostrar'){
            if(input[0].value == 31 && (input[1].value == 4 || input[1].value == 6 || input[1].value == 9 || input[1].value == 11)){
                for(let j = 0; j < input.length; j++){
                    input[j].classList.add('naoValidado')
                    titulo[j].classList.add('naoValidado')
            }
                dataInvalida2[0].classList.add('dataMostrar')
                dataInvalida2[0].classList.remove('dataNaoMostrar')
                resultado[0].innerHTML = '--'
                resultado[1].innerHTML = '--'
                resultado[2].innerHTML = '--'
            }
            else if(input[0].value > 28 && input[1].value == 2){
                for(let j = 0; j < input.length; j++){
                    input[j].classList.add('naoValidado')
                    titulo[j].classList.add('naoValidado')
                }
                dataInvalida2[0].classList.add('dataMostrar')
                dataInvalida2[0].classList.remove('dataNaoMostrar')
                resultado[0].innerHTML = '--'
                resultado[1].innerHTML = '--'
                resultado[2].innerHTML = '--'
            }
            else if(input[2].value > dataAtual.getFullYear()){
                for(let j = 0; j < input.length; j++){
                    input[j].classList.add('naoValidado')
                    titulo[j].classList.add('naoValidado')
                }
                passado[0].classList.add('passadoMostrar')
                passado[0].classList.remove('passadoNaoMostrar')
                resultado[0].innerHTML = '--'
                resultado[1].innerHTML = '--'
                resultado[2].innerHTML = '--'
            }
            else if(input[2].value == dataAtual.getFullYear() && input[1].value > (dataAtual.getMonth() + 1)){
                for(let j = 0; j < input.length; j++){
                    input[j].classList.add('naoValidado')
                    titulo[j].classList.add('naoValidado')
                }
                passado[0].classList.add('passadoMostrar')
                passado[0].classList.remove('passadoNaoMostrar')
                resultado[0].innerHTML = '--'
                resultado[1].innerHTML = '--'
                resultado[2].innerHTML = '--'
            }
            else if(input[2].value == dataAtual.getFullYear() && input[1].value == (dataAtual.getMonth() + 1) && input[0].value > dataAtual.getDate()){
                for(let j = 0; j < input.length; j++){
                    input[j].classList.add('naoValidado')
                    titulo[j].classList.add('naoValidado')
                }
                passado[0].classList.add('passadoMostrar')
                passado[0].classList.remove('passadoNaoMostrar')
                resultado[0].innerHTML = '--'
                resultado[1].innerHTML = '--'
                resultado[2].innerHTML = '--'
            }
            else{
                imagem[0].style.top = '0%'
                calcularIdade(input[2].value, input[1].value, input[0].value)
            }
        }
    }
})

function calcularIdade(ano, mes, dia){
    let dataAtual = new Date()
    let diaAtual = dataAtual.getDate()
    let mesAtual = dataAtual.getMonth() + 1
    let anoAtual = dataAtual.getFullYear()
    let resultadoAno = anoAtual - ano
    if(mesAtual >= mes){
        var resultadoMes = mesAtual - mes
    }
    else{
        resultadoAno--
        var resultadoMes = 12 - (mes - mesAtual)
    }
    if(diaAtual >= dia){
        var resultadoDia = diaAtual - dia
    }
    else{
        resultadoMes--
        if(resultadoMes < 0){
            resultadoAno--
            resultadoMes = 11
        }
        if(mesAtual == 4 || mesAtual == 6 || mesAtual == 9 || mesAtual == 11){
            resultadoDia = 30 - (dia - diaAtual)
        }
        else if(mesAtual == 2){
            resultadoDia = 28 - (dia - diaAtual)
        }
        else{
            resultadoDia = 31 - (dia - diaAtual)
        }
    }
    resultado[0].innerHTML = resultadoAno
    resultado[1].innerHTML = resultadoMes
    resultado[2].innerHTML = resultadoDia
}