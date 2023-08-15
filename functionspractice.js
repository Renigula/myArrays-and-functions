// const answerOne ="lorem ipsum"
// const answerTwo ="lorem ipsum"
// const answerThree ="lorem ipsum"

// let count =0;

// //write a functiont that will count the length of three strings. 

// const updateCount = (ans1, ans2 ,ans3) =>{
//     return ans1.length+ans2.length+ans3.length

// }

// updateCount(answerOne, answerTwo, answerThree)

// console.log(count1)


///function that spit out the longest word in a string. 

const findLongestWord = (sentence) => {
    // Split the sentence into an array of words
    let arrayOfWords = sentence.split(" ");
    
    // Initialize the variable to store the current longest word
    let currentLongest = "";
    
    // Loop through the array of words
    for (let i = 0; i < arrayOfWords.length; i++) {
        // Remove punctuation from the word
        let word = arrayOfWords[i].replace(/[^\w]/g, '');
        
        // Compare the length of the current word with the current longest
        if (word.length > currentLongest.length) {
            currentLongest = word;
        }
    }
    
    // Return the longest word found
    return currentLongest;
}

const sentence = "What words are longest here bongest?";
const longestWord = findLongestWord(sentence);
console.log("Longest word:", longestWord);
