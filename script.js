let testArray = [35,20,15,25,47,40,62,55,65,95,102,117,150,182,127,219,299,277,309,576]

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


getAllData()
.then(lines)
.then(parseNumbers)
.then(numbers => runBigCheck(numbers, 25))
.then(result => console.log(result))