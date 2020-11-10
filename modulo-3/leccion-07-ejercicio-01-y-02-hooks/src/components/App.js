import React, { useState } from 'react';
import '../stylesheets/App.scss';

const App = () => {

  const [age, setAge] = useState(20);
  const [gift, setGift] = useState(1);

  const handleClick = () => {
    setAge(age + 1);
    setGift(gift +1);
  }

  return (
    <div className="App">
      <p>Hoy tengo {age} años de edad</p>
      <button onClick={handleClick}>Hazme más viejo</button>
      <p>Tengo {gift} regalo</p>
      <button onClick={handleClick}>Dame regalos</button>
    </div>
  );
}

export default App;
