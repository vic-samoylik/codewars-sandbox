// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e.the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// 	Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2 ^ 0 = 1 and 0 is not a power of 2

// ==============My Solution=============================

// function isPowerOfTwo(n) {
// 	for (let i = n; i >= 1; i /= 2) {
// 		if (i === 1) return true
// 	}
// 	return false
// }

// ==============Codewars Solution=============================

// function isPowerOfTwo(n) {
// 	return Number.isInteger(Math.log2(n));
// }

const isPowerOfTwo = (n) => Number.isInteger(Math.log2(n))

// console.log(isPowerOfTwo(1024)) // -> true
// console.log(isPowerOfTwo(4096)) // -> true
console.log(isPowerOfTwo(333))  // -> false
