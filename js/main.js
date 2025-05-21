function calc(){
    let valor = document.getElementById('p').value
    let porcentagem =  document.getElementById('a').value
    let res = (valor / 100) * porcentagem
    let resultado = document.getElementById('resultado')
    let esconder = document.getElementById('form')

    resultado.innerHTML = res

    esconder.style.display = 'none'
}