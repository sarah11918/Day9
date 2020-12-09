let testArray = [35,20,15,25,47,40,62,55,65,95,102,117,150,182,127,219,299,277,309,576]

let results = []

function breakIntoSubArrays(array) {
  array.forEach(element => {
  results.push([...array.slice(array.indexOf(element),array.indexOf(element) + 5)])
  })
  let subArrays = results.filter(item => item.length === 5).slice(0,-1)
  return subArrays
}


function checkSums(array){
  let responses = []
  for (let n = 0; n<array.length; n++) {
    let checkedSums = []
    for (let i = 0; i < 5; i++) {
      for (let j = 1; j < 5; j++) {
        if (array[n][i] + array[n][i+j] > 0) {
        checkedSums.push(array[n][i] + array[n][i+j])
        }
       
      }
    }
    responses = [...responses, [...checkedSums]]

  }
 //console.log("done")
 return responses
}

console.log(checkSums(breakIntoSubArrays(testArray)))

  
       
//       // let answers = [
//       //   array[5],
//       //   ...checkedSums.slice(0,5),
//       //   array[6],
//       //   ...checkedSums.slice(5,10),
//       //   array[7],
//       //   ...checkedSums.slice(10,15),
//       //   array[8],
//       //   ...checkedSums.slice(15,20),
//       //   array[9],
//       //   ...checkedSums.slice(20,25),
//       //   array[10],
//       //   ...checkedSums.slice(25,30),
//       //   array[11],
//       //   ...checkedSums.slice(30,35),
//       //   array[12],
//       //   ...checkedSums.slice(35,40),
//       //   array[13],
//       //   ...checkedSums.slice(40,45),
//       //   array[14],
//       //   ...checkedSums.slice(45,50),
//       //   array[15],
//       //   ...checkedSums.slice(50,55),
//       //   array[16],
//       //   ...checkedSums.slice(55)
//     }  
//       // let answers = [...checkedSums]
//       // if (answers.includes(array[i+5])) {
//       //   continue
//       // } else results.push(array[i+5])

//   }
//   return checkedSums
// }

// function returnItemOfInterest(results){
//   let problem = []
//   for (let i = 0; i < testArray.length; i++) {
//     if (!results.includes(testArray[i])) {
//       problem.push(testArray[i])
//     }
//   }
//   return problem.slice(6)
// }
// console.log(checkSums(testArray).length)
// console.log(returnItemOfInterest(checkSums(testArray)))
// console.log(returnItemOfInterest(flattenResults(checkSums(testArray))))

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