const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const deliveryPizzas = Object.values(order)[3];
const deliveryPerson = Object.values(deliveryPizzas)[2];
const enderecoCompleto = Object.values(order)[2];
const anaSilveira = Object.values(deliveryPerson)[0];
const rafaelAndrade = Object.values(order)[0];
const telefone = Object.values(order)[1];
const rua = Object.values(enderecoCompleto)[0];
const numero = Object.values(enderecoCompleto)[1];
const ap = Object.values(enderecoCompleto)[2];

const customerInfo = (order) => {
  const mensagem = `"Olá ${anaSilveira}, entrega para: ${rafaelAndrade}, Telefone: ${telefone}, R. ${rua}, Nº: ${numero}, AP: ${701}"`;
  order = console.log(mensagem);
  return order;
};

customerInfo(order);

// "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.
order.name = 'Luiz Silva';
const valorTotal = Object.values(order)[4];
valorTotal.total = 50;
const luizSilva = Object.values(order)[0];
const pizzas = Object.values(deliveryPizzas)[0];
const marguerita = Object.keys(pizzas)[0];
const pepperoni = Object.keys(pizzas)[1];
const bedida = Object.values(deliveryPizzas)[1];
const type = Object.values(bedida)[0];
const cocaCola = Object.values(type)[0];

const orderModifier = (order) => {
  order = console.log(`"Olá ${luizSilva}, o total do seu pedido de ${marguerita}, ${pepperoni} e ${cocaCola} é R$ ${valorTotal.total = 50}"`);
  return order
};

orderModifier(order);
