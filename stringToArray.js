function stringToArray(str){
  var arrStr = str.split(',');
  // console.log(arrStr)
  var arr = []
  // for(var i = 0; i < 1; i++){
    // console.log(arrStr[i])
  for(var j = 0; j < arrStr.length; j++){
    arr.push(arrStr[j].split(''))
    // }
  }
  return arr
}
console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))
