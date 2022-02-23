import React, { useEffect, useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [alert, setAlert] = useState('');
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
    setInterval(getRandomInt, 1000);
  }, []);

  useEffect(() => {
    handleMultipleThreeFive();
  });

  return (
    <div>
      <p>{ number }</p>
      <p>{ alert }</p>
    </div>
  );
}

export default App;
