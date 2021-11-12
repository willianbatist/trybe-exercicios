//////// Adicionando coisas no Objects ////////

const customer1 = {
  firstName: "Roberto",
  age: 22,
  job: "Teacher",
};
customer1.lastName = 'Alves';
customer1['subName'] = 'Batista';
// console.log(customer1);

customer1.lastName = "Faria";
// console.log(customer1);

const customer2 = {
  firstName: "Maria",
  age: 23,
  job: "Medic",
};

// console.log(customer2);
customer2["lastName"] = "Silva";
// console.log(customer2);


////// adicionar algumas novas propriedades ao objeto //////

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};


let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
 console.log(Object.keys(customer));

