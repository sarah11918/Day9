let testArray = [35,20,15,25,47,40,62,55,65,95,102,117,150,182,127,219,299,277,309,576]
let testNumber = 127

async function getAllData() {
  let response = await fetch('Day9-1.txt')
  let data = await response.text()
  return data
}

function lines(data) {
  return data.split("\n")
}

function parseNumbers(data) {
  let parsedNumbers = data.map(number => parseInt(number))
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

//FOR PART B
function runBigCheck (originalNumbers, groupSize) {
  let firstNumbers = originalNumbers.slice(0,groupSize)
  let numbersToCheck = originalNumbers.slice(groupSize)
  let solution = numbersToCheck.map(number => lookForSolution(originalNumbers, number, groupSize))
 
  let possibleSolutions = solution.filter(element => element !== 0)
  return possibleSolutions.filter(element => !firstNumbers.includes(element))
}

function everythingLeftOf(items, target) {
  return items.slice(0, items.indexOf(target))
}

function lookForConsecutiveNumbers (originalNumbers, numberToCheck, endpointOfSolutionSpaceToCheck) {
  let solutionSpace = everythingLeftOf(originalNumbers, numberToCheck)
  for (let i = 0; i < endpointOfSolutionSpaceToCheck; i++){
    for (let j = i+1; j < endpointOfSolutionSpaceToCheck; j++) {
      let consecutiveSum = solutionSpace.slice(i,j).reduce((acc,total)=> {
        return total + acc
      },0)
      if (consecutiveSum === numberToCheck) {
        return solutionSpace.slice(i,j)
      }
    }
  }
  
  return []
}

// console.log(lookForConsecutiveNumbers(testArray, 127, 7))

function checkAllPosibleConsecutiveNumberLengths (originalNumbers, numberToCheck) {
  let answer = []
  let longestPossibleConsecutiveList = everythingLeftOf(originalNumbers,numberToCheck).length
  
  for (let i = 0; i < longestPossibleConsecutiveList; i++) {
    
    let solution = lookForConsecutiveNumbers(originalNumbers, numberToCheck, i)
    if (solution.length > 1 ) {
      answer.push(solution)}    
  }

  return Math.min(...answer[0]) + Math.max(...answer[0])
}
//console.log(checkAllPosibleConsecutiveNumberLengths(testArray, 127))


//FOR PART A
// getAllData()
// .then(lines)
// .then(parseNumbers)
// .then(numbers => runBigCheck(numbers, 25))
// .then(result => console.log(result) //373803594

//FOR PART B
getAllData()
.then(lines)
.then(parseNumbers)
.then(numbers => checkAllPosibleConsecutiveNumberLengths(numbers,373803594))
.then(result => console.log(result)) //51152360