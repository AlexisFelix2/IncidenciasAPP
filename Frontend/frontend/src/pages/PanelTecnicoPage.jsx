import React, { useEffect, useState } from 'react';
export default function PanelTecnicoPage() {
 const [incidencias, setIncidencias] = useState([]);
 useEffect(() => {
 // Simulación de datos. Luego se conectará al backend.
 setIncidencias([
 { id: 1, tipo: 'Red', estado: 'Pendiente' },
 { id: 2, tipo: 'Hardware', estado: 'Pendiente' },
 ]);
 }, []);
 const resolverIncidencia = (id) => {
 // Aquí se haría la llamada PUT/PATCH para cambiar el estado
 console.log("Resolviendo incidencia:", id);
 };
 return (
 <div className="panel-tecnico">
 <h2>Panel del Técnico</h2>
 <ul>
 {incidencias.map((inc) => (
 <li key={inc.id}>
 {inc.tipo} – {inc.estado}
 <button onClick={() => resolverIncidencia(inc.id)}>Resolver</button>
 </li>
 ))}
 </ul>
 </div>
 );
}