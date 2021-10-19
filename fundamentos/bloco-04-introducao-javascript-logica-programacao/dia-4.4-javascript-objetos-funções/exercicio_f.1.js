let stringSeparada;

function verificaPalindrome(topString) {
    stringSeparada = topString.split(' ').reverse().join('');
    if (topString === stringSeparada) {
        console.log('true');
    } else {
        console.log('false')
    }
}
verificaPalindrome('uau')
