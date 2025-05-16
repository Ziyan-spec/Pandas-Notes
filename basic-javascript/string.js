let str = 'Hello Ziyan';
console.log(str);
console.log("Length: ", str.length);

// Template Literals 
let str1 = `Sum is ${2 + 7}`;
console.log(str1);

let student = {
  name : 'Muhammad Ziyan',
  sgpa : 8.8,
  course : "Bsc"
};
console.log(`I, ${student.name} have ${student.sgpa} SGPA and pursuing ${student.course}.`);

/* Escape Characters */
let greet = 'Hello\nZiyan';
console.log(greet);

let str2 = '   Hello Coder';
//str2.toUpperCase();
let newStr = str2.toUpperCase();
console.log(newStr);
console.log(str2.toLowerCase());
console.log(str2.trim());


let str3 = 'Apna';
let str4 = 'Collge';
console.log(str3.slice(0,2));
//let res = str3 + str4;
//let res = str3.concat(str4);
let res = 'I learn coding from ' + str3.concat(str4);
console.log(res);

console.log(str3.replace("na","u"));
console.log(str4.charAt(4));

//str3[1] = 'h';
//console.log(str3);

// Problem 
let name = prompt('Enter your name: ');
let username = `Username : @${name.toLowerCase()}${name.length}`;
console.log(username);