function oddfib(num){
    let prev = 0;
   let curr = 1;
   let sum = 0;
   let next = 0
   while(curr <= num){
    if(curr % 2 !== 0){
        sum += curr
    }
    next = curr + prev
    prev = curr
    curr = next
   }
   return sum
}

console.log(oddfib(75024) )// should return 60696.