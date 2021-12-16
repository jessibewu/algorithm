// Write code to return the largest number in the given array

var maxNum = function(arr) {
       
    // Initialize maximum element
    let max = arr[0];

    // Traverse array elements 
    // from second and compare
    // every element with current max 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
        
    return max;
};
