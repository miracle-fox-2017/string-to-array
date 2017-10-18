function strToArr (arr) {
  let split = arr.split(',');
  let newArr = []
  // console.log(split);
  for (let i = 0; i < split.length; i++) {
    newArr.push([]);

    
    for(let j = 0; j<split[i].length; j++) {
    newArr[i].push(split[i][j]);
    // console.log(newArr[i])
    }
  }
  return newArr;
} 

console.log(strToArr('aqrst,ukaei,ffooo'));


