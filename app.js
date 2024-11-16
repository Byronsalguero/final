import React from 'react';
import FormularioReserva from './FormularioReserva';
import ListaReservas from './ListaReservas';

function App() {
  return (
    <div className="App">
      <h1>Hotel Reservas</h1>
      <FormularioReserva />
      <ListaReservas />
    </div>
  );
}

export default App;
