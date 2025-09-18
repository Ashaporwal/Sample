let n = 153;
let count = 0;
let original = n;

let temp = n;

while(temp>0){
temp = Math.floor(temp/10);
count++;
}

temp = n;
let sum = 0;
while(temp>0){
    let lastDigit = temp%10;
    sum = sum + Math.pow(lastDigit,count);
    temp = Math.floor(temp/10);
}

if(sum===original){
console.log(original+ " is armstrong");
}
else{
    console.log(original+ " is not an Armstrong");
}
