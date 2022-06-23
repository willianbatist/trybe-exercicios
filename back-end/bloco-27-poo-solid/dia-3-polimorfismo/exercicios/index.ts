class Animal {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  infoAnimal() {
    return console.log(`O nome do animal é ${this.name}`);
  }

  ageAnimal() {
    return console.log(`A idade do ${this.name} é ${this.age}`)
  }
}

const a = new Animal('willian', 22);
console.log(a.infoAnimal());
console.log(a.ageAnimal());

