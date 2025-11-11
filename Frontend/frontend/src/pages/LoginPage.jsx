import React from 'react';
import LoginForm from './LoginForm';
import loginImage from '../assets/image-incidencia-login.jpg'; // Asegúrate de que la imagen esté en esta ruta

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      
      {/* Sección izquierda – Login */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-white px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Sistema de Incidencias técnicas
        </h1>
        <LoginForm />
        <p className="text-xs text-gray-500 mt-6 text-center">
        Facultad de Ingeniería
        </p>
      </div>

      {/* Sección derecha – Imagen (solo visible en pantallas grandes) */}
      <div className="hidden lg:flex w-full lg:w-1/2 bg-blue-100 items-center justify-center">
        <img
          src={loginImage}
          alt="Imagen alusiva al sistema"
          className="max-w-md w-full h-auto object-contain p-8"
        />
      </div>
    </div>
  );
}