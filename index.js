'use strict'

function stringTo(str){
	let arr = str.split(',')
	let hasil = []

	for(var i = 0; i < arr.length; i++){

		let tampung = []
		for(var j = 0; j < arr[i].length; j++){
			tampung.push(arr[i][j])
		}

		hasil.push(tampung)
	}
	return hasil
}

console.log(stringTo('aqrst,ukaei,ffooo'))
console.log(stringTo('qwer,tyui,asdf,ghjk'))