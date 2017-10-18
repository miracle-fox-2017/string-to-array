let stringToArr = (str)=>{
  let arr = []
  let strArr = str.split(',')
  for(let i = 0; i < strArr.length; i++){
    arr.push(strArr[i].split(''))
  }
  return arr
}

console.log(stringToArr('aqrst,ukaei,ffooo'))
