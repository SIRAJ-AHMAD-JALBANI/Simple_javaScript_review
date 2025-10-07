function uniteUnique(...arrays) {
  let output = [];

  // Loop through each array
  for (let arr of arrays) {
    // Loop through each value inside the array
    for (let value of arr) {
      // Add only if not already included
      if (!output.includes(value)) {
        output.push(value);
      }
    }
  }

  return output;
}
// Tests 
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
