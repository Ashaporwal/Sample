// 557. Reverse Words in a String III

function reverseWords(s) {
    let result = "";
    let word = [];

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch !== " ") {
            // push character in array
            word.push(ch);
        } else {
            // reverse the word array manually
            for (let j = word.length - 1; j >= 0; j--) {
                result += word[j];
            }
            result += " ";   // add space
            word = [];       // reset for next word
        }
    }

    // handle last word
    for (let j = word.length - 1; j >= 0; j--) {
        result += word[j];
    }

    return result;
}

// Test
console.log(reverseWords("Let's take LeetCode contest"));


// function reverseString(s){
//     if(s[i]!==""){
//         word = word+s[i];
//     }
//     else{
//         for(let j=word.length-1; j>=0; j--){
//             result = result + word[j];
//         }
//         result 
//     }
// }