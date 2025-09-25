'use client';

import React, { useState } from 'react';
import LoginForm from '@/components/organisms/LoginForm';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberSession, setRememberSession] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Usuario: ${username}, Contraseña: ${password}, Recordar: ${rememberSession}`);
    // Aquí iría la lógica real de autenticación
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <LoginForm
        username={username}
        id="login-form"
        password={password}
        rememberSession={rememberSession}
        setUsername={setUsername}
        setPassword={setPassword}
        setRememberSession={setRememberSession}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
