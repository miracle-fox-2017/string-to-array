function strToArr(str)
{
  let words = str.split(',');
  let result = [];
  for (let i = 0; i < words.length; i++)
  {
    result.push(words[i].split(''));
  }
  return result;
}


console.log(strToArr("aqrst,ukaei,ffooo"));
console.log(strToArr("qwer,tyui,asdf,ghjk"));
