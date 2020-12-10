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

function lookForConsecutiveNumbers (originalNumbers, numberToCheck) {
  let index = originalNumbers.indexOf(numberToCheck)
  let solutionSpace = originalNumbers.slice(0,index)
  for (let i=2; i< solutionSpace.length; i++){

    if (solutionSpace.slice(-i).reduce((acc, total) => total + acc,0) === numberToCheck ) {
      return solutionSpace.slice(-i)
    }
  
  }
  // console.log(solutionSpace.slice(-2).reduce((acc, total) => {
  //   return total + acc
  // },0))
  // console.log(solutionSpace.slice(-3).reduce((acc, total) => {
  //   return total + acc
  // },0))
  return []
}

console.log(lookForConsecutiveNumbers(testArray, testNumber))
//FOR PART A
// getAllData()
// .then(lines)
// .then(parseNumbers)
// .then(numbers => runBigCheck(numbers, 25))
// .then(result => console.log(result))

//FOR PART B
// getAllData()
// .then(lines)
// .then(parseNumbers)
// .then(result => console.log(result))