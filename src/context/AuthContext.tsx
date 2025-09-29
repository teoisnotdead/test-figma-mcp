'use client';

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  isLoggedIn: boolean;
  user: { username: string } | null;
  login: (username: string, password: string, remember: boolean) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Intentar cargar la sesión del localStorage
    const storedUser = localStorage.getItem('user');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

    if (storedUser && storedIsLoggedIn === 'true') {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string, remember: boolean): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulación de una llamada a API
      return await new Promise((resolve) => {
        setTimeout(() => {
          if (username === 'admin' && password === 'admin') {
            const userData = { username };
            setUser(userData);
            setIsLoggedIn(true);
            if (remember) {
              localStorage.setItem('user', JSON.stringify(userData));
              localStorage.setItem('isLoggedIn', 'true');
            } else {
              localStorage.removeItem('user');
              localStorage.removeItem('isLoggedIn');
            }
            resolve(true);
          } else {
            setError('Usuario o contraseña incorrectos.');
            resolve(false);
          }
          setIsLoading(false);
        }, 1000); // Simular latencia de red
      });
    } catch (err) {
      setError('Ocurrió un error durante el inicio de sesión.');
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
