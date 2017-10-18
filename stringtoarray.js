function stringToArray (str){
  let arr = []
  let split = str.split(',');
  for(let i = 0; i < split.length; i++){
    arr.push([]);
    for(let j = 0; j < split[i].length; j++){
      arr[i].push(split[i][j]);
    }
  }
  console.log(arr);
}

stringToArray('aqrst,ukaei,ffooo');
