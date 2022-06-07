// enum EyeColor {
//   Black = "Pretos",
//   Blue = "Azuis",
//   Green = "Verdes",
//   Brown = "Castanhos",
// }


// class Person {
//   name: string;
//   birthDate: Date; // o tipo Date está presente no TypeScript assim como no JavaScript
//   eyeColor: EyeColor; // na cor dos olhos usamos uma Enum com valores pré definidos

//   constructor(name: string, birthDate: Date, eyeColor: EyeColor) {
//     // usamos o this para acessar as propriedades da instância da classe,
//     // ele representa a própria instância que estamos criando
//     // atribuimos o valor do parâmetro recebido a propriedade da instância da classe
//     this.name  = name;
//     this.birthDate  = birthDate;
//     this.eyeColor  = eyeColor;
//   }

//   speak(): void {
//     console.log(`${this.name} está falando.`);
// }

// eat(): void {
//     console.log(`${this.name} está comendo.`)
// }

// walk(): void {
//     console.log(`${this.name} está andando.`)
// }
// }

// const person1 = new Person("Jane Doe", new Date("1986-01-01"), EyeColor.Brown);
// // const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

// console.log(person1);
// person1.speak()

interface Dog {
  dogName:string;
  age:number;
  speak(param: string):string;
}

class Dog {

  constructor (dogName: string, age: number) {
    this.dogName = dogName;
    this.age = age;
  }

  speak(frase: string) {
    return `${frase}`
  }
}

const dog1 = new Dog('Pastor Alemão', 12);

console.log(dog1.speak('AuAuAuAuAuAuAu'));

