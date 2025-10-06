function bouncer(arr){
  let input = [...arr]
  let output = []
  for(let value of input){
    if(Boolean(value)){
      output.push(value)
    }
  }
  return output
}

bouncer([7, "ate", "", false, 9])