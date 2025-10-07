function sumAll(numbersArr){
  let sum = 0
  let min = Math.min(numbersArr[0], numbersArr[1])
  let max = Math.max(numbersArr[0], numbersArr[1])
  for (let i = min; i <= max; i ++){
      sum += i
    }

  
  return sum
}
console.log(sumAll([4,1]))