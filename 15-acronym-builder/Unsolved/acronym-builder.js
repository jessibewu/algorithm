// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function(str) {
    // str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

    var words, acronym, nextWord;

    words = str.match(/\b(\w)/g).join("").toUpperCase();
    acronym= "";
    index = 0
    while (index<words.length) {
            nextWord = words[index];
            acronym = acronym + nextWord.charAt(0);
            index = index + 1 ;
    }
    return acronym
};
