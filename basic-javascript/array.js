let city = ["Delhi", "Mumbai", "Hydrabad", "Lucknow"];
console.log(city);

// for loop
/*for (let i=0; i<city.length; i++){
  console.log(city[i]);
} */

/*city[1] = "Pune";
// for of loop
for(let val of city){
  console.log(val);
} */

// problem1
let marks = [78,98,56,80,86,92];
let sum = 0;
for(let i=0; i<marks.length; i++){
  sum += marks[i];
}
console.log(`Average Marks: ${sum/marks.length}`);

// problem2
let price = [250,645,300,900,50];
for(let i=0; i<price.length; i++){
  price[i] = price[i] - price[i]/10;
}
console.log(price);

// Methods 
let items= ['Banana','Apple','Suhel'];
items.push('Ziyan',30);
console.log(items);
let deletedItem = items.pop();
console.log(items);
console.log('Deleted item: ', deletedItem);

// items.toString();
// console.log(items.toString());
// console.log(items);

items.unshift('Sajid','Asif');
console.log(items);
let delItem = items.shift();
console.log(items);
console.log(delItem);
console.log(typeof(delItem));

// Concatenate 
let newArr = price.concat(items);
console.log(newArr);

let num = [1,2,3,4,5,6,7];
console.log(num.slice(2,5));
console.log(num);

num.splice(2,3,101);
//console.log(num.splice(2,2,101));
console.log(num);

// problem 3
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
companies.shift();
console.log(companies);
console.log(companies.splice(1,1,"Ola"));
console.log(companies);
companies.push("Amazon");
console.log(companies);
