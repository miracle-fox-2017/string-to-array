//input string dipisahkan dengan koma
//masing masing huruf dimasukan kedalam array

let stringToArray = (string) => {
  let pecah1 = string.split(',');
  let result = [];
  for(let i = 0; i<pecah1.length; i++){
    result.push(pecah1[i].split(""));
  }
  return result;
}

console.log(stringToArray("asdas,dhufk,aksiv"));
console.log(stringToArray("asdas,dhufk,aksiasdas,dav"));
