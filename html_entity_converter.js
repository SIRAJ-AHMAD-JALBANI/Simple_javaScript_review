function convertHTML(str){
  const matching = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }
  return  str.replace(/[&<>"']/g,
  function name(match) {
     return matching[match]
  });
}