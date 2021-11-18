// Use o método forEach chamando a callback showEmailList para apresentar os emails
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
      console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
// eu fiz desse modo
// const escreverEmail = emailListInData.forEach((email) => {
//     return showEmailList(email);
// });
// pode ser feito também assim usando HOF.
emailListInData.forEach(showEmailList);
  // Adicione seu código aqui