/*
Function description

Complete the  function with the following parameter:

: a 2-D array of integers
Return

: the absolute difference in sums along the diagonals
*/

function diagonalDifference(arr) {
    // Write your code here
    let leftDiagonalSum = 0, rightDiagonalSum=0;
    let arraySize = arr.length;
    for( let i=0; i< arraySize; i++){
        leftDiagonalSum += arr[i][i];
        rightDiagonalSum += arr[i][arraySize - i -1];   
    }
    return Math.abs(leftDiagonalSum - rightDiagonalSum);
}

