import { Person } from "./module/person.js";

let input = document.querySelectorAll("input");

input[3].addEventListener("click", () => {
  var name = input[0].value;
  var age = input[1].value;
  var height = input[2].value;

  const person = new Person(name, age, height);
  person.sayHello();
});
