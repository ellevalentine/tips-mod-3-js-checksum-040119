var data1 = [
    [2, 3, 7, 8],
    [0, 1, 3],
    [9, 2, 8, 3]
  ]

var data2 = [
    [409, 194, 207, 470, 178],
    [454, 235, 333, 511, 103],
    [474, 293, 525, 372, 408],
    [428, 4321, 2786, 6683, 3921],
    [265, 262, 6206, 2207, 5712]
  ]


function checkSum(sheet){ 
    let sum = 0
    for ( var i = 0; i < sheet.length; i++) {   
    sum += Math.max(...sheet[i])-Math.min(...sheet[i])
    }
    return sum
}

console.log(checkSum(data1))
console.log(checkSum(data2))


  // run: 'node solutions.js' in terminal and will get the answer 13131