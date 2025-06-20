/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=2) return n;
    let first = 1;
    let second = 2;
    let current;

    for(let i=3; i<=n; i++){
        current = first + second;
        first = second;
        second = current;
    }
    return current;
};