// Write your code below this line

function decodeString(word) {
    let decode = Number(word[0]);
    let answer = ""
    for (let i=1; i<word.length; i++){
        let strValue = word[i].charCodeAt() + decode
        answer += String.fromCharCode(strValue)
    }
    return answer;
}

console.log (decodeString("2fcjjm"))