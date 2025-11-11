import React, { useState, useEffect } from 'react';

export default function LoginForm() {
  // CAMBIO ID: C-20251111-001 - Estados para validación en tiempo real
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  // CAMBIO ID: C-20251111-002 - Estados para sistema de seguridad por intentos
  const [intentosFallidos, setIntentosFallidos] = useState(0);
  const [bloqueado, setBloqueado] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(0);
  const [cargando, setCargando] = useState(false);

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

  // CAMBIO ID: C-20251111-002 - Sistema de bloqueo por intentos fallidos
  const iniciarBloqueoTemporal = () => {
    setBloqueado(true);
    let tiempo = 30;
    setTiempoRestante(tiempo);
    
    const interval = setInterval(() => {
      tiempo--;
      setTiempoRestante(tiempo);
      if (tiempo <= 0) {
        clearInterval(interval);
        setBloqueado(false);
        setIntentosFallidos(0);
      }
    }, 1000);
  };

  // CAMBIO ID: C-20251111-002 - Manejo del proceso de login con seguridad
  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Verificar si el sistema está bloqueado
    if (bloqueado) {
      alert(`Sistema bloqueado. Espere ${tiempoRestante} segundos.`);
      return;
    }

    // Verificar si hay errores de validación
    if (Object.keys(errors).length > 0) {
      alert('Por favor corrija los errores antes de continuar.');
      return;
    }

    setCargando(true);
    
    // Simulación de proceso de autenticación
    setTimeout(() => {
      setCargando(false);
      
      // CAMBIO ID: C-20251111-002 - Validación de credenciales y manejo de intentos
      if (usuario === 'admin' && password === '123456') {
        // Login exitoso - resetear contador de intentos
        setIntentosFallidos(0);
        alert('Login exitoso!');
      } else {
        // Login fallido - incrementar intentos
        const nuevosIntentos = intentosFallidos + 1;
        setIntentosFallidos(nuevosIntentos);
        
        // CAMBIO ID: C-20251111-002 - Activar bloqueo después de 3 intentos fallidos
        if (nuevosIntentos >= 3) {
          iniciarBloqueoTemporal();
          alert('Demasiados intentos fallidos. Sistema bloqueado por 30 segundos.');
        } else {
          alert(`Credenciales incorrectas. Intentos restantes: ${3 - nuevosIntentos}`);
        }
      }
    }, 1500);
  };

  return (
    <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
        {/* CAMBIO ID: C-20251111-002 - Título dinámico según estado de bloqueo */}
        {bloqueado ? 'Sistema Bloqueado' : 'Iniciar Sesión'}
      </h2>

      {/* CAMBIO ID: C-20251111-002 - Mensaje de bloqueo temporal */}
      {bloqueado && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <p className="text-red-700 text-center font-medium">
            Demasiados intentos fallidos. Espere {tiempoRestante} segundos.
          </p>
        </div>
      )}

      {/* CAMBIO ID: C-20251111-002 - Indicador de intentos fallidos */}
      {intentosFallidos > 0 && !bloqueado && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
          <p className="text-yellow-700 text-sm text-center">
            Intentos fallidos: {intentosFallidos}/3
          </p>
        </div>
      )}

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
            disabled={bloqueado || cargando}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
            disabled={bloqueado || cargando}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          {/* CAMBIO ID: C-20251111-001 - Mensaje de error para contraseña */}
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={bloqueado || cargando || Object.keys(errors).length > 0}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {/* CAMBIO ID: C-20251111-002 - Texto dinámico del botón */}
          {cargando ? 'Verificando...' : bloqueado ? 'Sistema Bloqueado' : 'Ingresar'}
        </button>
      </form>

      <div className="text-right mt-4">
        <button
          type="button"
          className="text-sm text-blue-600 hover:underline disabled:text-gray-400"
          onClick={() => alert('Funcionalidad aún no implementada')}
          disabled={bloqueado}
        >
          ¿Olvidaste tu contraseña?
        </button>
      </div>
    </div>
  );
}