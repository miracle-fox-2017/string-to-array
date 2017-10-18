const to2DArray = (str) => {
  const arrResult = [];
  str = str.split(',');
  console.log(str);

  for (i of str) {
    console.log(i);
    arrResult.push(i.split(''));
  }

  return arrResult;
}

console.log(to2DArray('aqrst,ukaei,ffooo'));
