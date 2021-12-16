// Write code to create a function that returns the factorial of `num`

// var factorial = function(array) {
//     if (array == 0) {
//         return 1;
//     }
//     return array * factorial(array - 1);
// };

var factorial = function(array) {

    var res = 1, i;
    for (i = 2; i <= array; i++)
        res *= i;
    return res;
};