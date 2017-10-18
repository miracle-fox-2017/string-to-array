function stringToArray(str) {
	let arr = []
	str = str.split(',')
	for (let i = 0; i < str.length; i++) {
		arr.push(str[i].split(''))
	}
	return arr
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))