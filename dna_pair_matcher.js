function pairElement(pairs) {
  const pairMap = {
  A : "T",
  T : "A",
  G : "C",
  C : "G"
  }
  const output = [];
  for (let value of pairs) {
    output.push([value, pairMap[value]]);
  }

  return output;
}
