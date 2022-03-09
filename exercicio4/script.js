
function run () {
    let inputNome = prompt('Digite o seu nome:')

    let inputIdade = prompt('Digite sua idade:')

    let idade = parseInt(inputIdade)

    let maiorOuMenor

    let undefined = ''


    if (inputNome === undefined  || inputIdade === undefined){
            undefined = alert('Escreva os dados corretamente')
            return

    }
   



    if (idade >= 18) {
        maiorOuMenor = 'maior'
    } else if (idade < 18) {
        maiorOuMenor = 'menor'
    }


    let mensagemPersonalizada = ''

    if (inputNome === 'Thomas Anderson' || inputNome === 'thomas anderson') {
        mensagemPersonalizada = 'Voce é personagem do filme Matrix!!'
    }

    let mensagem = `Ola ${inputNome}, voce é ${maiorOuMenor} de idade!`

    document.querySelector('#mensagem').innerHTML = mensagem
    document.querySelector('#mesagemPersonalizada').innerHTML = mensagemPersonalizada


    

    


}