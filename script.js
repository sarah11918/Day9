let testArray = [ 35,20,15,25,47,40,62, 55,65,95,102,117,150,182,127,219,299,277,309,576]



let results = []
function checkSums(array){
  for (let i=0; i < array.length - 5; i++) {
    let checkedSums = []
    checkedSums.push(array[i] + array[i+1])
    checkedSums.push(array[i] + array[i+2])
    checkedSums.push(array[i] + array[i+3])
    checkedSums.push(array[i] + array[i+4])
    checkedSums.push(array[i+1] + array[i+2])
    checkedSums.push(array[i+1] + array[i+3])
    checkedSums.push(array[i+1] + array[i+4])
    checkedSums.push(array[i+2] + array[i+3])
    checkedSums.push(array[i+2] + array[i+4])
    checkedSums.push(array[i+3] + array[i+4])
    
    results.push(checkedSums.filter(item => item === array[i+5]))
    results.map(item => item[0])
 
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

console.log(returnItemOfInterest(flattenResults(checkSums(testArray))))

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