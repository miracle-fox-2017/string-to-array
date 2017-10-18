const stringToArray = (str) => {
	let arrStr = str.split(',');
	let arrCol = [];
	let arrRowCount = arrStr.length;

	for (let i = 0; i < arrRowCount; i++) {
		arrCol.push(arrStr[i].split(''));
	}

	return arrCol;
}


console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log(stringToArray("qwer,tyui,asdf,ghjk"));