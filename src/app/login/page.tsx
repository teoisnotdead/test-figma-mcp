'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '@/components/organisms/LoginForm';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberSession, setRememberSession] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const { login, isLoggedIn, isLoading, error } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/'); // Redirigir al dashboard si ya está logueado
    }
    if (error) {
      setFormError(error);
    }
  }, [isLoggedIn, router, error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (username.trim() === '' || password.trim() === '') {
      setFormError('Por favor, ingresa tu usuario y contraseña.');
      return;
    }

    const success = await login(username, password, rememberSession);
    if (success) {
      router.push('/');
    }
  };

  if (isLoading || isLoggedIn) {
    return <div className="flex items-center justify-center min-h-screen">Cargando...</div>; // O un spinner
  }

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
        formError={formError}
      />
    </div>
  );
}
