/*let i = 1;
do {
  console.log(i);
  i++;
} while (i<10); */

/*let name = "Ziyan";
for (let val of name){
  console.log(val);
} */

let student = {
  name : "Ziyan",
  class : "Bsc",
  age : 20,
};
for (let key in student){
  console.log(student[key]);
}
