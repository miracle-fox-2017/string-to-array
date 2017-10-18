function strToArr(str) {
  str = str.split(',')
  let arr = [];
for (let i = 0; i<str.length;i++){
  arr.push([])
  for (let j =0;j<str[i].length;j++){
    arr[i].push(str[i][j])
  }
}
  return arr
}

console.log(strToArr('aqrst,ukaei,ffooo'))
