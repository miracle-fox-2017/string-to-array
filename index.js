function stringToarray(arr, counter, result){

	let temp = arr.split(',')
	let hasil = temp.length

	if(arr.length === 0){
		return result
	}

	result[counter] = temp[0].split('')
	temp.splice(0,1)
	return stringToarray(temp.join(','), counter+1, result)
}

console.log(stringToarray('aqrst,ukaei,ffooo', 0, []));
//console.log(stringToarray('qwer,tyui,asdf,ghjk'));