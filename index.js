// javascript// document.getElementById("count").innerText = 5

// need a way to store the data
// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch
// let count = 5 + 7

 // console.log(count)

 // create variable, myAge, set value to age
 // let myAge = 24

 // log the myAge variable to the console
 //console.log(myAge)


 // 1. Create two variables, myAge and humanDogRatio
 // 1 human year is equal to 7 dog years
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

// let myAge = 24
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// let count = 5

// // count + 1
// count = count + 1

// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// initialize count as 0
// listen for clicks on button
// increment count when button is clicked
// change the count-el id in HTML to reflect the new count

// function increment() {
//     console.log("the button was clicked")
// }


// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// what is happening when we use document.getElement...
// the DOM - Docuemnt Object Model - aka how you use JS to modify a website
// document - you're interacting with HTML doc
// object - shoving the HTML doc into a JS object
// model - representation





// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}




