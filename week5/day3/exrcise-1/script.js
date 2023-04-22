let alphabet = 'abcdefghijklmnopqrstuvwxyz';

function checkPangram(sentense) {
    let splitStr = sentense.toLowerCase().split(' ').join();
    console.log(splitStr);
    for (let i = 0; i < alphabet.length; i++){
        if (splitStr.indexOf(alphabet[i]) === -1) {
            return 'not panagram'
        }
    }
    return 'panagram'
}

console.log(checkPangram('twentY five'))