class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    return `${this.name} ${this.surname} ha ${this.age}`;
  }
}
