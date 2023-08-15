// // const tempInCelsius =(fahrenheit)=>{
// //     let tempInCelsius = ((fahrenheit-32)/1.8)
// //     console.log(tempInCelsius + "°")
// // }
// // tempInCelsius(89)


// // const tempInFahrenheit =(celsius)=>{
// //     let tempInCelsius = ((celsius+32)*1.8)
// //     console.log(tempInFahrenheit + "°")
// // }
// // tempInFahrenheit(23)

// // const findTheQ = (string) => {
// //     let count = 0;

// //     for (let i = 0; i < string.length; i++) {
// //         if (string[i].toLowerCase() === "q") {
// //             count++;
// //             console.log("Found 'q' at index", i);
// //         }
// //     }

// //     return count;
// // }

// // const allTheQs = findTheQ("Quintin went to the quaint town in Quebec.");
// // console.log("Total count of 'q's:", allTheQs);

// // let thisArray =["bob", "Jerry", "Brandon"] 
// //     thisArray.push("Lisa")

// // console.log(thisArray)

// // console.log(thisArray[1])



// Shopping List Organizer:
// let shoppingList = ['Apples', 'Milk', 'Bread', 'Eggs'];
// Write a function that will loop through the list and describe each element.
// Write a function that will add something to the list IF it is not already on the list. 
// Write a function that will remove something from the list


// let shoppingList = ['Apples', 'Milk', 'Bread', 'Eggs'];
// const readList = () => {
//     for (let i=0;i<shoppingList.length;i++) {
//         let item =shoppingList[i];
//         console.log(item)
    
// }
// }


// readList()

let shoppingList = ['Apples', 'Milk', 'Bread', 'Eggs'];

const removeFromList = (itemToRemove) => {
    for (let i = shoppingList.length - 1; i >= 0; i--) {
        if (shoppingList[i] === itemToRemove) {
            shoppingList.splice(i, 1);
        }
    }
}

removeFromList("Milk");
console.log(shoppingList);


//example with forEach
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});




// Guest List Management: Develop an array to store the names of guests for an event. 
// let guestList = ['Alice', 'Bob', 'Charlie'];
// Write functions to add guests, 
// remove guests by name, 
// and check if a specific guest is on the list.


// High Scores Tracker: Develop an array to store high scores in a game. 
// let highScores = [1024, 876, 1500, 720, 950];
// Write functions to add new scores, 
// remove scores, 
// and display the top scores (a specific number of top scores).

// Student Roster: Create an array to store student grades. 
// let studentGrades = [85, 92, 78, 65, 90];
// Write functions to add new grades, 
// and calculate the average grade
// Get the highest and lowest grades
// Add 10% to grades under 70%


// Color Palette Creator: Develop an array to store color codes.
// let colorPalette = ['#FF5733', '#3498DB', '#27AE60', '#E74C3C', '#9B59B6'];
// Write a function to select a random color.
