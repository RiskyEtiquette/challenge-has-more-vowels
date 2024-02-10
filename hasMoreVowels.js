function hasMoreVowels(word) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let nonVowelCount = 0;

    for (let char of word) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else {
            nonVowelCount++;
        }
    }

    return vowelCount > nonVowelCount;
}

// Test cases
console.log(hasMoreVowels('moose'));  // true
console.log(hasMoreVowels('mice'));    // false
console.log(hasMoreVowels('graph'));   // false
console.log(hasMoreVowels('yay'));     // false
console.log(hasMoreVowels('Aal'));     // true
