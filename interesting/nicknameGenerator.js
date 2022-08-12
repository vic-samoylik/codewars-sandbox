// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// 	nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.

// 	nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// If the string is less than 4 characters, return "Error: Name too short".

// 	Notes:

// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase(e.g.Sam).
// The input can be modified

function nicknameGenerator(name) {
	const thirdLetter = name.charAt(2)
	return name.length < 4 ? 'Error: Name too short' :
		'aeiuo'.includes(thirdLetter) ? name.slice(0, 4) : name.slice(0, 3)
}

console.log(nicknameGenerator("Gregory"))