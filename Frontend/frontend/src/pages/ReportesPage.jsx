import React, { useState } from 'react';
export default function ReportesPage() {
 const [filtro, setFiltro] = useState('');
 // Esta sería reemplazada con datos reales desde backend
 const reportes = [
 { id: 1, tipo: 'Red', estado: 'Atendida' },
 { id: 2, tipo: 'Hardware', estado: 'Pendiente' },
 ];
 return (
 <div className="reportes-page">
 <h2>Reportes de Incidencias</h2>
 <input
 type="text"
 placeholder="Filtrar por tipo o estado"
 value={filtro}
 onChange={(e) => setFiltro(e.target.value)}
 />
 <table>
 <thead>
 <tr>
 <th>ID</th>
 <th>Tipo</th>
 <th>Estado</th>
 </tr>
 </thead>
 <tbody>
 {reportes
 .filter((r) =>
 `${r.tipo} ${r.estado}`.toLowerCase().includes(filtro.toLowerCase())
 )
 .map((r) => (
 <tr key={r.id}>
 <td>{r.id}</td>
 <td>{r.tipo}</td>
 <td>{r.estado}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 );
}