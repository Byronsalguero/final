import React, { useState } from 'react';
import axios from 'axios';

const FormularioReserva = () => {
    const [nombreCliente, setNombreCliente] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [tipoHabitacion, setTipoHabitacion] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const nuevaReserva = {
            nombreCliente,
            fechaInicio,
            fechaFin,
            tipoHabitacion
        };

        axios.post('http://localhost:8080/api/reservas', nuevaReserva)
            .then(response => {
                console.log('Reserva creada:', response.data);
                alert('Reserva creada con éxito!');
            })
            .catch(error => {
                console.error("Error al crear la reserva", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre del Cliente</label>
                <input type="text" value={nombreCliente} onChange={(e) => setNombreCliente(e.target.value)} />
            </div>
            <div>
                <label>Fecha de Inicio</label>
                <input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
            </div>
            <div>
                <label>Fecha de Fin</label>
                <input type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} />
            </div>
            <div>
                <label>Tipo de Habitación</label>
                <select value={tipoHabitacion} onChange={(e) => setTipoHabitacion(e.target.value)}>
                    <option value="Sencilla">Sencilla</option>
                    <option value="Doble">Doble</option>
                    <option value="Suite">Suite</option>
                </select>
            </div>
            <button type="submit">Registrar Reserva</button>
        </form>
    );
};

export default FormularioReserva;
