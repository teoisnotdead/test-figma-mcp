'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/organisms/Header';
import NavigationSidebar from '@/components/organisms/NavigationSidebar';
import StatsCardsGrid from '@/components/organisms/StatsCardsGrid';
import CalendarCard from '@/components/organisms/CalendarCard';

export default function Home() {
  const { isLoggedIn, isLoading } = useAuth();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, isLoading, router]);

  if (isLoading || !isLoggedIn) {
    return <div className="flex items-center justify-center min-h-screen">Cargando...</div>; // O un spinner
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header
        companyName="Minera Los Andes"
        facilityName="Faena Principal - Sector Norte"
        userName="Juan Díaz"
        onMenuClick={toggleSidebar} // Pasar la función de toggle al Header
      />
      <div className="flex flex-row flex-1 items-stretch">
        <NavigationSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <main className="flex-1 p-4 md:p-4 lg:p-8 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Dashboard Principal</h1>
          <p className="mb-4">Resumen de operaciones y indicadores clave.</p>
          <StatsCardsGrid />
          <div className="hidden">
            <CalendarCard />
          </div>
        </main>
      </div>
    </div>
  );
}
