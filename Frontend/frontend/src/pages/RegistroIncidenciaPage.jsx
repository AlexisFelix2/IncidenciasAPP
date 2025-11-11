import React, { useState } from 'react';
export default function RegistroIncidenciaPage() {
 const [tipo, setTipo] = useState('');
 const [descripcion, setDescripcion] = useState('');
 const handleSubmit = (e) => {
 e.preventDefault();
 console.log("Incidencia enviada:", { tipo, descripcion });
 // Aquí se integrará con backend (POST)
 };
 return (
 <div className="registro-incidencia">
 <h2>Registrar Incidencia</h2>
 <form onSubmit={handleSubmit}>
 <select value={tipo} onChange={(e) => setTipo(e.target.value)}
required>
 <option value="">Seleccione tipo</option>
 <option value="Red">Red</option>
 <option value="Hardware">Hardware</option>
 <option value="Software">Software</option>
 </select>
 <textarea
 placeholder="Descripción del problema"
 value={descripcion}
 onChange={(e) => setDescripcion(e.target.value)}
 required
 />
 <button type="submit">Enviar</button>
 </form>
 </div>
 )
}