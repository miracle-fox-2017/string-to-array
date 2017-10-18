function stringtoArr(str){
let strSplit = str.split(',')
let strSplit2=[];

// console.log(strSplit)
for(let i=0;i<strSplit.length;i++){
  strSplit2.push(strSplit[i].split(''))
}
return strSplit2;
}

console.log(stringtoArr("aqrst,jhgft,ffooo"))
