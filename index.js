const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials
}
const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
//const rollCall = [];

// for(const student of skiSchool) {
//   rollCall.push(student + " the skier");
// }
// console.log(skiSchool)
// console.log(rollCall)

const rollCall = skiSchool.map(function (student) {
  return student + ' the skier';
});

console.log(rollCall)