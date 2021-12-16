// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

var longestWord = function(str) {
    // var array1 = str.match(/\w[a-z]{0,}/gi);
    // var result = array1[0];

    // for(var x = 1 ; x < array1.length ; x++)
    // {
    //     if(result.length < array1[x].length)
    //     {
    //     result = array1[x];
    //     } 
    // }
    // return result;

    str = str.split(" ")
    // Return the first sorted item of the Array
    return str.sort((a, b) => b.length - a.length)[0]
};
