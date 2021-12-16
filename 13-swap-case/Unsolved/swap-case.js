// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function(str) {

    var newLetters = "";
    for(var i = 0; i<str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            newLetters += str[i].toUpperCase();
        }else {
            newLetters += str[i].toLowerCase();
        }
    }
    console.log(newLetters);
    return newLetters;
};
