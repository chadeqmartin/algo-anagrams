const isCharacterMatch = function(string1, string2) {
    
    const regex = /[^\s|,]/g;
    let cleanString1 = string1.toLowerCase().match(regex).join('');
    let cleanString2 = string2.toLowerCase().match(regex).join('');
    
    for (let elem of cleanString1){
        if (cleanString2.indexOf(elem) === -1) {
            return false;
        } else {
            cleanString2 = cleanString2.replace(elem, '');
        }
    }
    return cleanString2.length === 0;
};


const anagramsFor = function(word, listOfWords) {
    
    return listOfWords.filter((elem) => {
        return isCharacterMatch(word, elem);
    })
};

module.exports = {isCharacterMatch, anagramsFor};