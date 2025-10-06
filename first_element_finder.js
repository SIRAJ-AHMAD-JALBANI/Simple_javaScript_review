function findElement(arr, func){
for(let value of arr){
  if(func(value)){
    return value;
  }
}
return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))
