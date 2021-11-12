const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };

  const primos = {
    primo1: 'Willian',
    primo2: 'Leonardo',
  };

  // Object.assign('objecto que vai recer outros objectos', 'objeto que vou adicionar');
  Object.assign(person, info, family, primos)
//   console.log(person)
  
  /* Output
    { name: 'Alberto',
    lastName: 'Gomes',
    age: 23,
    job: 'engenheiro',
    children: [ 'Maria', 'João' ],
    wife: 'Ana'
    } */

    const getDayName = (number) => {
        const dayNumber = number - 1;
        const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        return days[dayNumber];
      };

      const printDayname = (dayNumber) => {
        console.log(getDayName(dayNumber));
      };
