function stringToArray(input){
  let fromString = input.split(',')
  // console.log(fromString)
  let nestArr = []


  for(let r=0; r<fromString.length; r++){
    let row = []
    for(let c=0; c<fromString[0].length; c++){
      // console.log('-----',c);
      // console.log('--r---',r);
      row.push(fromString[r][c])
      // console.log(row);
    }
    nestArr.push(row)
    // console.log(nestArr);
  }
  return nestArr
}

function tampilString(arr){

  let a = arr.split(',')
  let b = []
  let temp = []

  for(let i=0; i<a.length; i++){
    b[i] = a[i].split('')
  }

  console.log(b)
}

tampilString('aqrst,ukaei,ffooo')
// stringToArray('aqrst,ukaei,ffooo')
// stringToArray('qwer,tyui,asdf,ghjk')
// console.log(stringToArray('aqrst,ukaei,ffooo'))
// console.log(stringToArray('qwer,tyui,asdf,ghjk'))
