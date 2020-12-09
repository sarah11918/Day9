let testArray = [35,20,15,25,47,40,62,55,65,95,102,117,150,182,127,219,299,277,309,576]

async function getAllData() {
  let response = await fetch('Day9-1.txt')
  let data = await response.text()

  return data
}

function lines(data) {
  return data.split("\n")
}

function parseMoves(array) {
  let parsedMoves = array.map(move => parseInt(move))
  return parsedMoves
}
//HAVE MY DATA READY TO USE AS ONE BIG ARRAY OF numbers
function breakIntoSubArrays(arrayOfNumbers,groupSize) {
  let results = []
  arrayOfNumbers.forEach(element => {
    results.push([...arrayOfNumbers.slice(arrayOfNumbers.indexOf(element),arrayOfNumbers.indexOf(element) + groupSize)])
  })
  let subArrays = results.filter(item => item.length === groupSize).slice(0,-1)
  return subArrays
}

function checkSums(numberGroupings,groupSize){
  let responses = []
  for (let n = 0; n < numberGroupings.length; n++){
    let numberGrouping = numberGroupings[n]
    let checkedSums = []
    for (let i = 0; i < groupSize; i++) {
      for (let j = i + 1; j < groupSize; j++) {
        if (numberGrouping[i] + numberGrouping[j] > 0) {
          checkedSums.push(numberGrouping[i] + numberGrouping[j])
        }
       
      }
    }
    responses.push(checkedSums)
  }

 return responses
}

// // let items = []
// // items.push([1])
// // console.log(items)

function compare (arrayOfSumsOfPriorNumbers,numbers,groupSize) {
  for (let i = 0; i < arrayOfSumsOfPriorNumbers.length; i++) {
    if (!arrayOfSumsOfPriorNumbers[i].includes(numbers[i + groupSize])) {
      return numbers[i + groupSize]
    }
  }
}

//console.log(compare([[17, 18, 5],[5,19,20]],[15,2,3,17,4],3))
//console.log(compare(checkSums(breakIntoSubArrays(testArray,5),5),testArray,5))
//console.log(breakIntoSubArrays(testArray))





//console.log(compare(checkSums(breakIntoSubArrays(testArray))))
getAllData()
.then(lines)
.then(parseMoves)
.then(numbers => compare(
  checkSums(breakIntoSubArrays(numbers,25),25),
  numbers,
  25)
)
//then(compare(array,numbers,25))
.then(result => console.log(result))


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
  
