class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  sayHello = function () {
    var container = document.querySelector("p");
    container.textContent =
      "Hello my name is " +
      this.name +
      ". I am " +
      this.age +
      " years old and " +
      this.height +
      "cm tall. :)";
  };
}

export { Person };
