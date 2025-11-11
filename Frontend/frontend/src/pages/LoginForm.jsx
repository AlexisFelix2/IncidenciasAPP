import React, { useState } from 'react';

export default function LoginForm() {
  // CAMBIO ID: C-20251111-001 - Estados para validación en tiempo real
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // CAMBIO ID: C-20251111-001 - Validación en tiempo real de campos
  const validateField = (name, value) => {
    const newErrors = {...errors};
    
    if (name === 'usuario') {
      if (value.length < 3) {
        newErrors.usuario = 'El usuario debe tener al menos 3 caracteres';
      } else {
        delete newErrors.usuario;
      }
    }
    
    if (name === 'password') {
      if (value.length < 6) {
        newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
      } else {
        delete newErrors.password;
      }
    }
    
    setErrors(newErrors);
  };

  // CAMBIO ID: C-20251111-001 - Manejo de cambios en inputs con validación
  const handleUsuarioChange = (e) => {
    const value = e.target.value;
    setUsuario(value);
    validateField('usuario', value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validateField('password', value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Verificar si hay errores de validación antes de enviar
    if (Object.keys(errors).length > 0) {
      alert('Por favor corrija los errores antes de continuar.');
      return;
    }

    // Simulación de proceso de autenticación
    alert('Formulario válido, procediendo con login...');
  };

  return (
    <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Iniciar Sesión</h2>

      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="usuario" className="block text-sm font-medium text-gray-600 mb-1">
            Usuario
          </label>
          <input
            id="usuario"
            type="text"
            placeholder="Ingresa tu usuario"
            value={usuario}
            onChange={handleUsuarioChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* CAMBIO ID: C-20251111-001 - Mensaje de error para usuario */}
          {errors.usuario && (
            <p className="text-red-500 text-xs mt-1">{errors.usuario}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* CAMBIO ID: C-20251111-001 - Mensaje de error para contraseña */}
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Ingresar
        </button>
      </form>

      <div className="text-right mt-4">
        <button
          type="button"
          className="text-sm text-blue-600 hover:underline"
          onClick={() => alert('Funcionalidad aún no implementada')}
        >
          ¿Olvidaste tu contraseña?
        </button>
      </div>
    </div>
  );
}