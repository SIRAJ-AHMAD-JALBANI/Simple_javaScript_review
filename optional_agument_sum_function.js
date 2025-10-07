function addTogether(...args) {
  const [a, b] = args;

  if (typeof a !== "number") return undefined;

  if (args.length === 2) {
    return typeof b === "number" ? a + b : undefined;
  }

  return function(c) {
    return typeof c === "number" ? a + c : undefined;
  };
}
