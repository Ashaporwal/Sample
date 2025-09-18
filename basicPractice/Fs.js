// let n = prompt(("Enter the value of n"));
let n= 7;
let a = 0;
let b = 1;

console.log("Fibonacci series..");
for(let i=0; i<=n; i++){
    let c = a+b;
  // a = a+b;
  console.log(a);

  a = b;
  b = c;
//   console.log();
}