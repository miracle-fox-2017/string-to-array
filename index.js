function strArray(str) {
  let newArr = str.split(',');
  let arr = [];
  let hasil = ''

  for (var i = 0; i < newArr.length; i++) {
    arr.push([])
    for (var j = 0; j < newArr[0].length; j++) {
      hasil = newArr[i][j];
      arr[i].push(hasil)
    }
  }

  return arr
}

console.log(strArray('aqrst,ukaei,ffooo'));
console.log('==========================')
console.log(strArray('qwer,tyui,asdf,ghjk'));
