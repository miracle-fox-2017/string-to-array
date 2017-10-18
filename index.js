function stringtoarray(str) {
    str = str.split(",")
    let arr = []
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i].split(""))
    }
    return arr;
}

console.log(stringtoarray("aqrst,ukaei,ffooo"))
console.log(stringtoarray("qwer,tyui,asdf,ghjk"))