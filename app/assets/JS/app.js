var alex [
  {
    "name": "Alex",
    "age": 27
  }
]

function isAge(age) {
  var answer;
  if( age < 18) {
    answer = "You're underage";
  } else {
    answer = "you can continue";
  }
  console.log(answer);
}

isAge(16);

isAge(alex[0].age);
