import React from 'react';

export default function LoginForm() {
  return (
    <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Iniciar Sesión</h2>

      <div className="mb-4">
        <label htmlFor="usuario" className="block text-sm font-medium text-gray-600 mb-1">Usuario</label>
        <input
          id="usuario"
          type="text"
          placeholder="Ingresa tu usuario"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">Contraseña</label>
        <input
          id="password"
          type="password"
          placeholder="Ingresa tu contraseña"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors"
      >
        Ingresar
      </button>

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