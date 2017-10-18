function strArr(str){
  let bung=str.split(',');
  let kusan=[];
  for(let i = 0;i < bung.length;i++){
    kusan.push(bung[i].split(''))
  }
  return kusan
}

console.log(strArr('qwer,tyui,asdf,ghjk'));
