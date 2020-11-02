import React from 'react';
//importamos el nuevo componente Mediacard
import Mediacard from './Mediacard';
//ojo: al crear la carpeta components y mover este archivo App.js debemos modificar la ruta del archivo css
import "../App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Mediacard</h1>
      </header>
      <main>
        {/* llamamos al componente Mediacard incluyéndolo dentro de una etiqueta html (solo de cierre) */}
        <Mediacard/>
      </main>
    </div>
  );
}

export default App;
