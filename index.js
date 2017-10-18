function strArr(arr){
    var split = arr.split(',');
    var arrTo = [];
    for (var i = 0; i < split.length;i++){
        arrTo.push([]);
        for (var j = 0; j < split[i].length;j++){
            arrTo[i].push(split[i][j]);
        }
    }
    return arrTo;
}

console.log(strArr('aqrst,ukaei,ffooo'));
console.log(strArr('qwer,tyui,asdf,ghjk'));