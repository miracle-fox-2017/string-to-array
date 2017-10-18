function stringToArray(str) {
  let splitStr = str.split(',');
  let nestArr = [];

  for (var i = 0; i < splitStr.length; i++) {
    nestArr.push(splitStr[i].split(''));
  }

  console.log(nestArr);

}

stringToArray('aqrst,ukaei,ffooo');
stringToArray('qwer,tyui,asdf,ghjk');
