function stringToArr(str){
  str = str.split(',')
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let row = []
    for (let j = 0; j < str[i].length; j++) {
      row.push(str[i][j])
    }
    result.push(row)
  }
  return result
}

console.log(stringToArr('aqrst,ukaei,ffooo'));
console.log(stringToArr('qwer,tyui,asdf,ghjk'));
