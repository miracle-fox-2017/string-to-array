const stringToArray=(input)=>{
    let hasil=[];
    const splitted=input.split(",");
    for(let i=0;i < splitted.length;i++){
        hasil.push(splitted[i].split(""));
    }
    return hasil;
}

console.log(stringToArray("abcd,efgh,ijkl,mnop,qrstuvw,xyz"));
