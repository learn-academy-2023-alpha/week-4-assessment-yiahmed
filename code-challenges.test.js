// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
// Pseudo code: Create a test that takes in the shuffleColors function that takes in an array and removes the first item from the array and shuffles the remaining content.
// Within the test create an expected variable for each of the arrays that contains a possible desired output. (expected1 and expected2)
// create two it statements for each array with being the correct expected result using .toEqual(expect.arrayContaining(expected(1 or 2)) and the next it statement for the incorrect expected result using .not.toEqual(expect.arrayContaining(expected(1 or 2))).
// Run the test and expect the correct reference error of shuffleColors is not defined.
// describe('shuffleColors', () => {
//   const colors1 = ["purple", "blue", "green", "yellow", "pink"]
//   const colors2 = [
//     "chartreuse",
//     "indigo",
//     "periwinkle",
//     "ochre",
//     "aquamarine",
//     "saffron"
//   ]
//   const expected1 = [ 'yellow', 'blue', 'green', 'pink' ]
//   const expected2 = [
//     "indigo",
//     "periwinkle",
//     "ochre",
//     "aquamarine",
//     "saffron"
//   ]
//   it('removes first element then shuffles the remaining content in the array, outputs can be in different order', () => {
//     expect(shuffleColors(colors1)).toEqual(expect.arrayContaining(expected1));
//   });
//   it('removes first element then shuffles the remaining content in the array, outputs can be in different order', () => {
//     expect(shuffleColors(colors2)).toEqual(expect.arrayContaining(expected2));
//   });
//   it('does not match conditions of removing the first element then shuffling the content in the array', () => {
//     expect(shuffleColors(colors1)).not.toEqual(expect.arrayContaining(expected1));
//   });
//   it('does not match conditions of removing the first element then shuffling the content in the array', () => {
//     expect(shuffleColors(colors2)).not.toEqual(expect.arrayContaining(expected2));
//   });

// }); // ---> shuffleColors
    // ✓ removes first element then shuffles the remaining content in the array, outputs can be in different order (2 ms)
    // ✓ removes first element then shuffles the remaining content in the array, outputs can be in different order
    // ✓ does not match conditions of removing the first element then shuffling the content in the array
    // ✓ does not match conditions of removing the first element then shuffling the content in the array
// // const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// // const colors2 = [
// //   "chartreuse",
// //   "indigo",
// //   "periwinkle",
// //   "ochre",
// //   "aquamarine",
// //   "saffron"
// // ]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// // b) Create the function that makes the test pass.
// // Pseudo code: Create a function called shuffleColors that takes in an array as its argument
// // Within the function remove the first element of the array using .shift() and the use a for loop that iterates backwards on the array to ensure every element is randomized. Create a variable in the loop called randomIndex that selects a random index between 0 and the current index which is then used to shuffle the array.
// // Return the shuffled array
// const shuffleColors = (array) => {
//   array.shift()
//   for (let i = array.length - 1; i > 0; i--) {
//     const randomIndex = Math.floor(Math.random() * (i + 1));
//     [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
// }
//   return array
// }

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
// Pseudo code: Create a test takes in an object that contains up votes and down votes and returns the end tally.
// Run the test expect correct reference error noDupe is not defined 
// describe("totalTally", () => {
//   const votes1 = { upVotes: 13, downVotes: 2 }
//   const votes2 = { upVotes: 2, downVotes: 33 }
//   it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
//     expect(totalTally(votes1)).toEqual(11)
//     expect(totalTally(votes2)).toEqual(-31)
//   })
// })  // --> totalTally ✓ takes in an object that contains up votes and down votes and returns the end tally. (2 ms)

// const votes1 = { upVotes: 13, downVotes: 2 }
// // // Expected output: 11
// const votes2 = { upVotes: 2, downVotes: 33 }
// // // Expected output: -31

// b) Create the function that makes the test pass.
// Pseudo code: create a function called totalTally that takes in an object. There are two ways to have this function work and the first way is to deconstruct the object by using {} to access its properties. Assign the deconstructed properties to the object to unsure the values are the same then subtract the downvotes from the upvotes and return result
// The second way is to use dot notation to access the values within the object and subtract the downvotes from the upvotes and return the result.
// const totalTally = (votes) =>{
// // const {upVotes, downVotes} = votes
// // return upVotes - downVotes
// return votes.upVotes - votes.downVotes
// }



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
// Pseudo code: Create a test that takes in the function noDupe. This function takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
// Run the test and expect correct reference error noDupe is not defined 
// describe("noDupe", () => {
//   const dataArray1 = ["array", "object", "number", "string", "Boolean"]
//   const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
//     it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
//       expect(noDupe(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//     })
  // }) // ---> noDupe ✓ takes in two arrays as arguments and returns one array with no duplicate values (2 ms)


// const dataArray1 = ["array", "object", "number", "string", "Boolean"]
// const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// // b) Create the function that makes the test pass.
// // Pseudo coed: Create a function called noDupe that takes in two arrays as its arguments.
// // Within the the function create a variable called combinedArrays and using the spread operator combine both arrays into this new variable.
// // Finally return the desired array with no duplicates using the the spread operator on the new set method. The new set method will have the combinedArrays variable as its argument.
// const noDupe = (array1, array2) => {
// const combinedArrays = [...array1, ...array2]
// return [...new Set(combinedArrays)]
// }

