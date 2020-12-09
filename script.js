let testArray = [35,20,15,25,47,40,62,55,65,95,102,117,150,182,127,219,299,277,309,576]

let results = []
function checkSums(array){
   let checkedSums = []
  for (let i=0; i < array.length - 5; i++) {
    for (let j=1; j < 5; j++){
      checkedSums.push(array[i] + array[i+j])
      let answers = [...checkedSums]
      if (answers.includes(array[i+5])) {
        continue
      } else results.push(array[i+5])
    }

  }
  return results
}

function flattenResults(results) {
  return results.map(item => item[0])
}

function returnItemOfInterest(results){
  let problem = []
  for (let i = 0; i < results.length; i++) {
    
    if (results[i] > 0) {
      continue
    } else problem.push(i)
  }
  return testArray[problem[0]+5]
}

console.log(checkSums(testArray))
//console.log(returnItemOfInterest(flattenResults(checkSums(testArray))))

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

// getAllData()
// .then(lines)
// .then(parseMoves)
// .then(checkSums)
// .then(flattenResults)
// .then(result => console.log(result))