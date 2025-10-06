function titleCase(str){
  str = str.toLowerCase().split(" ")
  let output = ""
  console.log(str)
  for(let value of str){
    output += value[0].toUpperCase() + value.slice(1)+ " ";
  }
  return output.trim()
}
console.log(titleCase("I like to code"))



