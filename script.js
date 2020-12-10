let testArray = [35,20,15,25,47,40,62,55,65,95,102,117,150,182,127,219,299,277,309,576]

async function getAllData() {
  let response = await fetch('Day9-1.txt')
  let data = await response.text()

  return data
}

function lines(data) {
  return data.split("\n")
}

function parseNumbers(array) {
  let parsedNumbers = array.map(number => parseInt(number))
  return parsedNumbers
}
//AT THIS POINT I HAVE MY DATA READY TO USE AS ONE BIG ARRAY OF numbers

function lookForSolution(numbers, numberToCheck, groupSize) {
  let index = numbers.indexOf(numberToCheck)
  let previousNumbers = numbers.slice(index - groupSize, index);
  
  let differences = previousNumbers.map(number => numberToCheck - number)
  let theTwoNumbersThatSum = differences.filter(number => previousNumbers.includes(number))
  if (theTwoNumbersThatSum.length === 0) {
    return numberToCheck
  }   else return 0
}

function runBigCheck (originalNumbers, groupSize) {
  let firstNumbers = originalNumbers.slice(0,groupSize)
  let numbersToCheck = originalNumbers.slice(groupSize)
  let solution = numbersToCheck.map(number => lookForSolution(originalNumbers, number, groupSize))
 
  let possibleSolutions = solution.filter(element => element !== 0)
  return possibleSolutions.filter(element => !firstNumbers.includes(element))
}

//console.log(runBigCheck(testArray, 5))



getAllData()
.then(lines)
.then(parseNumbers)
.then(numbers => runBigCheck(numbers, 25))
//   checkSums(breakIntoSubArrays(numbers,25),25),
//   numbers,
//   25)
// )
// //then(compare(array,numbers,25))
.then(result => console.log(result))


// function breakIntoSubArrays(arrayOfNumbers,groupSize) {
//   let results = []
//   arrayOfNumbers.forEach(element => {
//     results.push([...arrayOfNumbers.slice(arrayOfNumbers.indexOf(element),arrayOfNumbers.indexOf(element) + groupSize)])
//   })
//   let subArrays = results.filter(item => item.length === groupSize).slice(0,-1)
//   return subArrays
// }

// function checkSums(numberGroupings,groupSize){
//   let responses = []
//   for (let n = 0; n < numberGroupings.length; n++){
//     let numberGrouping = numberGroupings[n]
//     let checkedSums = []
//     for (let i = 0; i < groupSize; i++) {
//       for (let j = i + 1; j < groupSize; j++) {
//         if (numberGrouping[i] + numberGrouping[j] > 0) {
//           checkedSums.push(numberGrouping[i] + numberGrouping[j])
//         }
       
//       }
//     }
//     responses.push(checkedSums)
//   }

//  return responses
// }

// // // let items = []
// // // items.push([1])
// // // console.log(items)

// function compare (arrayOfSumsOfPriorNumbers,numbers,groupSize) {
//   for (let i = 0; i < arrayOfSumsOfPriorNumbers.length; i++) {
//     if (!arrayOfSumsOfPriorNumbers[i].includes(numbers[i + groupSize])) {
//       return numbers[i + groupSize]
//     }
//   }
// }

// //console.log(compare([[17, 18, 5],[5,19,20]],[15,2,3,17,4],3))
// //console.log(compare(checkSums(breakIntoSubArrays(testArray,5),5),testArray,5))
// //console.log(breakIntoSubArrays(testArray))

// SOLUTION HERE!!!! //
// function lookForSolution(numbers, numberToCheck, groupSize) {
//   let index = numbers.indexOf(numberToCheck)
//   let previousNumbers = numbers.slice(index - groupSize, index);
  
//   let differences = previousNumbers.map(number => numberToCheck - number)
//   let theTwoNumbersThatSum = differences.filter(number => previousNumbers.includes(number))
//   if (theTwoNumbersThatSum.length === 0) {
//     return numberToCheck
//   }   else return 0
// }

// function runBigCheck (originalNumbers, groupSize) {
//   let numbersToCheck = originalNumbers.slice(groupSize)
//   let solution = numbersToCheck.map(number => lookForSolution(originalNumbers, number, groupSize))

//   return solution.filter(element => element !== 0)
  
// }

// console.log(runBigCheck(testArray, 5))
// console.log(lookForSolution(testArray, 102, 5 ))
// console.log(lookForSolution(testArray, 127, 5 ))
  

//console.log(compare(checkSums(breakIntoSubArrays(testArray))))



// let testArray = [35,20,15,25,47,40,62,55,65,95,102,117,150,182,127,219,299,277,309,576]
// let results = []

// async function getAllData() {
//   let response = await fetch('Day9.txt')
//   let data = await response.text()

//   return data
// }

// function lines(data) {
//   return data.split("\n")
// }

// function parseMoves(array) {
//   let parsedMoves = array.map(move => parseInt(move))
//   return parsedMoves
// }

// function breakIntoSubArrays(array) {
//   array.forEach(element => {
//   results.push([...array.slice(array.indexOf(element),array.indexOf(element) + 5)])
//   })
//   let subArrays = results.filter(item => item.length === 25).slice(0,-1)
//   return subArrays
// }

// function checkSums(array){
//   let responses = []
//   let problem =[]
//   for (let n = 0; n< array.length; n++){
//     let checkedSums = []
//     let problems = []
//     for (let i = 0; i < 5; i++) {
//       for (let j = 1; j < 5; j++) {
//         if (array[n][i] + array[n][i+j] > 0) {
//         checkedSums.push(array[n][i] + array[n][i+j])
//         }
       
//       }
//     }
 
//     responses = [...responses, [...checkedSums]]

//   }
//  return responses
// }

// function compare (array) {
//   for (let i = 0; i < array.length; i++) {
//     if (!array[i].includes(testArray[i+5])) {
//       return testArray[i+5]
//     }
//   }
// }


// //console.log(compare(checkSums(breakIntoSubArrays(testArray))))
// getAllData()
// .then(lines)
// .then(parseMoves)
// .then(breakIntoSubArrays)
// .then(checkSums)
// .then(compare)
// .then(result => console.log(result))
  
