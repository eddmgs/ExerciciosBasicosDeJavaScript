
    let nome = prompt(' Digite seu nome')

    let idade = prompt(' Digite sua idade')

    if ( idade >= 18){
        document.write(`Ola ${nome}, voce é maior de idade`)
    } else if (idade <= 18) {
        document.write(`Ola ${nome}, voce é menor de idade`)
    }