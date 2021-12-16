// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {

    var wordsArray = str.toLowerCase().split(/\s+/);
    var upperCased = wordsArray.map(function(word) {
        return word.charAt(0).toUpperCase() + word.substr(1);
    });
    return upperCased.join(" ");
};
