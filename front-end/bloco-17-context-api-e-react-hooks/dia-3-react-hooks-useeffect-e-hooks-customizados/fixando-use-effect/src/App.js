import React, { useEffect, useState } from 'react';

function App() {
  const [number, setNumber] = useState(1);
  const [alert, setAlert] = useState('');
  const [id, setId] = useState(0);
  function getRandomInt() {
    let min = Math.ceil(1);
    let max = Math.floor(100);
    let random = Math.floor(Math.random() * (max - min)) + min
    return setNumber(random);
  }
  const handleMultipleThreeFive = () => {
    if (number%3 === 0) {
      setAlert('ACERTOU');
    }
  };

  useEffect(() => {
    setId(setInterval(getRandomInt, 1000));
  }, []);

  useEffect(() => {
    handleMultipleThreeFive();
  });

  useEffect(() => {
    if(alert === 'ACERTOU') {
      return clearInterval(id)
    }
  })
  
  return (
    <div>
      <p>{ number }</p>
      <p>{ alert }</p>
    </div>
  );
}

export default App;
