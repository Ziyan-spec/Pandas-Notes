let marks = prompt('Enter marks :');


if (marks < 100 && marks > 80) {
  console.log('Grade: A');
}
else if (marks <= 80 && marks > 60) {
  console.log('Grade: B');
}
else if (marks <= 60 && marks > 40) {
  console.log('Grade: C');
}
else {
  console.log('Grade: F')
}