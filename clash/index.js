/* ------ 1 ---------- 
sum of ASCII in a string

const s = readline()
const r = s.split('')
           .reduce((acc,i) => acc + i.charCodeAt(0), 0)
console.log(r)
----x-- 1 ----x- */

/* ------ 2 ---------- 

1=1,2=2,3=6,4=24,5=120

const N = +readline()
let total = 1
for(let i=1; i<= N; i++){
 total *= i
}
console.log(total);

----x-- 2 ----x- */

/* ------ 3 ----------
Every patient has a unique amount of teeth.
Each tooth is either healthy 1, rotten 0 or 
pulled out -. Pull out any rotten tooth you find

const n = readline()
let total = 0
for(let i=1; i<= n; i++){
  const ROW = readline()
  console.log(ROW.replace(/0/g,"-"));
}
----x-- 3 ----x- */

/* ------ 4 ----------
1 binary number B.the result of NOT a B, 
ex. 001 => 110

const B = readline()
let num = B.split('')
           .map(num => num == 0 ? '1' : '0')
console.log(num.join(''))            
----x-- 4 ----x- */

/* ------ 5 ----------
Hello World! => ****************
                * Hello World! *
                ****************

const A = readline()
console.log('*'.repeat(A.length + 4));
console.log(`* ${A} *`);            
console.log('*'.repeat(A.length + 4));            
----x-- 5 ----x- */


/* ------ 6 ----------
average of ASCII in a string, ex. abc = 98

const s = readline()
console.log(Math.floor(s.split('').reduce((total, letter)=>total + letter.charCodeAt(0),0)/s.length));  
----x-- 6 ----x- */
// sum of ASCII in a string

// const s = readline()
// const r = s.split('').reduce((acc,i) => acc + i.charCodeAt(0), 0)
// console.log(r)
/* ------ 7 ----------
 5 4 9 2 7 => 2 4 5 7 9

const N = +readline()
let inputs = readline().split(' ');
console.log(inputs.map(Number).sort((a,b)=>a-b).join(' '));            

----x-- 7 ----x- */