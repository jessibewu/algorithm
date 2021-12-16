// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

var reverseWords = function(str) {

    // reverse all the letters (like able -> elba)
    // var reverseWord = str.split("").reverse().join("");
    // return reverseWord;

    //reverse the words (like "my name" -> "name my")
    var array = str.split(' ').reverse().join(" ") 
    return array;

};
