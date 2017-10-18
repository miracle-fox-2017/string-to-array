function stringtoarray(str) {
  var arr = str.split(',')
  var arrofarr = []
  for(var i = 0; i < arr.length; i++) {
    arrofarr.push(arr[i].split(''))
  }
  return arrofarr
}

console.log(stringtoarray('aqrst,ukaei,ffooo'));
console.log(stringtoarray('qwer,tyui,asdf,ghjk'));
