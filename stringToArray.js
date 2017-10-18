function stringTonewArr(str) {
  let newarr = [];
  let strarr = str.split(',');
  //console.log('strarr--->',strarr);
  for (var i = 0; i < strarr.length; i++) {
    newarr.push(strarr[i].split(''))
  }
  //console.log(strarr);
  //console.log(newarr);
  return newarr
}
console.log(stringTonewArr('kata1,kata2,kata3')); //5huruf  5kata
//console.log('---------');
console.log(stringTonewArr('kat1,kat2,kat3,kat4')); //4huruf 4kata
