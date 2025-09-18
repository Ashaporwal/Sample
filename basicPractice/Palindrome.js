let n = 121;
let reverse = 0;
let original=0;

while(n>0){
let lastDigit = n%10;

reverse = reverse*10+lastDigit;
n = Math.floor(n/10);
}
// console.log(reverse);
if(original===n){
    console.log("Num is Palindrome ",reverse);
}
else{
    console.log("nUm is not palindrome ",reverse);
}