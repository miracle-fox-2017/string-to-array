

function stringToArray (param){

var split = param.split(',');
var tampung = [];

    for(let j = 0; j < split.length; j++){
      tampung.push(split[j].split(''))
    }

     return tampung


}
console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
