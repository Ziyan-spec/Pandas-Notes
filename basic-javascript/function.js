function sum(x,y) {
  // console.log('Sum is', x+y);
  s = x + y;
  return s;
}
let val = sum(4,5);
console.log('Sum:', val);

// Modern JS
let arrowMul = (a,b)=> {
  console.log(a*b);
}
arrowMul(4,6);

// Problem 1
/*function countVowels(str){
  count = 0;
  for(let i=0; i<str.length; i++){
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o'|| str[i]=='u'){
      count++;
    }
  }
  return count;
}
let n = countVowels('mynameisziyan');
console.log(`No of vowels: ${n}`); */

// problem 1 arrow function 
let countV = (str)=>{
  let count = 0;
  let str1 = str.toLowerCase();
  for(let char of str1){
    if(char=='a'|| 
    char=='e'||
    char=='i'||
    char=='o'||
    char=='u'){
      count++;
    }
  }
  console.log('count: ', count);
}
countV('hElloWorld');

// for each loop
let arr1 = ['Delhi','Mumbai','pune'];
arr1.forEach((val,idx,arr)=> {
  console.log(val,idx,arr);
});

// problem 
let a = [2,4,5,6];
a.forEach((val )=> {
  console.log(val*val);
});

/* Map Method*/
const newArr = a.map((val) => {
  return val*2;
});
console.log(newArr);

// Filter Method 
let arr2 = [1,2,3,4,5,6,7];
const evenArr = arr2.filter((val)=> {
  return val % 2 == 0;
});
console.log(evenArr);

// Reduce Method 
let arr3 = [3,4,5,62];
let largeNum = arr3.reduce((prev,curr) => {
  return prev > curr ? prev : curr;
});
console.log(largeNum);

// problem 1
let marks = [20,89,97,91,56,96];
let toppers = marks.filter((val) => {
  return val > 90;
});
console.log(toppers);

// problem 2
let n = prompt('Enter a number: ');
let myArr = [];
for(let i=1; i<=n; i++){
  myArr[i-1] = i;
}
let sum2 = myArr.reduce((prev,curr) => {
  return prev + curr;
});
console.log(myArr);
console.log('Sum is ',sum2);
