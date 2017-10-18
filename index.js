function stringToArray(str){
  let pisahStr = str.split(',')
  let hasil = [];
  for (var row = 0; row < pisahStr.length; row++) {
    let rows = [];
    for (var col = 0; col < pisahStr[0].length; col++) {
      rows.push(pisahStr[row][col])
    }
    hasil.push(rows)
  }
  return hasil
}
console.log(stringToArray('qeuns,dhwjs,shdkw'));
console.log(stringToArray('qeun,dhwj,shdk,ksqj'));
