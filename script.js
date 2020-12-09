let testArray = [35,20,15,25,47,40,62,55,65,95,102,117,150,182,127,219,299,277,309,576]
let results = []

async function getAllData() {
  let response = await fetch('Day9.txt')
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

function breakIntoSubArrays(array) {
  array.forEach(element => {
  results.push([...array.slice(array.indexOf(element),array.indexOf(element) + 5)])
  })
  let subArrays = results.filter(item => item.length === 5).slice(0,-1)
  return subArrays
}

function checkSums(array){
  let responses = []
  let problem =[]
  for (let n = 0; n< array.length; n++){
    let checkedSums = []
    let problems = []
    for (let i = 0; i < 5; i++) {
      for (let j = 1; j < 5; j++) {
        if (array[n][i] + array[n][i+j] > 0) {
        checkedSums.push(array[n][i] + array[n][i+j])
        }
       
      }
    }
 
    responses = [...responses, [...checkedSums]]

  }
 return responses
}

function compare (array) {
  for (let i = 0; i < array.length; i++) {
    if (!array[i].includes(testArray[i + 5])) {
      return testArray[i + 5]
    }
  }
}


console.log(compare(checkSums(breakIntoSubArrays(testArray))))
// getAllData()
// .then(lines)
// .then(parseMoves)
// .then(breakIntoSubArrays)
// .then(checkSums)
// .then(compare)
// .then(result => console.log(result))


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
  
