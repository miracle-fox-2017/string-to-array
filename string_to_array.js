let stringToArray = str =>{
	let newArr = [];
	let newStr = str.split(",")
	for (let i = 0 ; i<newStr.length ; i++){
		newArr.push(newStr[i].split(""));
	}
	return newArr;
}
console.log(stringToArray("aqrst,ukaei,ffooo"))
console.log(stringToArray("qwer,tyui,asdf,ghjk"))