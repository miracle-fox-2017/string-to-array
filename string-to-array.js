function stringToArray(str){
  let result = [];
  let split = str.split(',')
  for(let i = 0; i < split.length; i++){
    // console.log(split[i]);
    splitI = split[i]
    let row = []
    for(let y = 0; y < splitI.length; y++){
      row.push(splitI[y])
    }
    result.push(row)
  }
  return result
}
console.log(stringToArray('aqrst,ukaei,ffooo'));
