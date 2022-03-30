

let inputnum = prompt('Digite um numero para tabuada:')

let num = parseInt(inputnum)
 



for ( tab = 0; tab < 11; tab++) {
    let result = num * tab;
    document.write( num + " x " + tab + "=" + (num * tab) + "<br>");
}