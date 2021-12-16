// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
        
    let count = 0;
    
    // find the count of vowels
    if (str.length > 1) {
    // return number of vowels
    return count = str.match(/[aeiou]/gi).length;
    } else if (str.length <= 0) {
        return count;
    }
};
