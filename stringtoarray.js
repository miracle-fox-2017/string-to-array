function stringToArray(kata) {
    var arr = [];
    var spl = kata.split(',');

    for(var i = 0 ; i < spl.length ; i++) {
      arr.push([]);
        for(var j = 0 ;j < spl[i].length ; j++) {
            arr[i].push(spl[i][j]);
        }
    }
    return arr;
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('aqrgst,ukgaei,fffooo,jfhrfu,kkdjdr,reuyue'));
