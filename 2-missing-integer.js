// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
/*
Write a function:
function solution(A);
that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.
Given A = [−1, −3], the function should return 1
*/

//Using Set: TC O(n), SC O(n)
//using In-place approach: TC O(n), SC O(1)

function solution(A) {
  const n = A.length;
  
  for (let i = 0; i < n; i++) {
    while (A[i] > 0 && A[i] <= n && A[A[i] - 1] !== A[i]) {
      [A[A[i] - 1], A[i]] = [A[i], A[A[i] - 1]];
    }
  }
  
  for (let i = 0; i < n; i++) {
    if (A[i] !== i + 1) return i + 1;
  }
  
  return n + 1;
}

console.log(solution([1, 3, 6, 4, 1, 2]))
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));