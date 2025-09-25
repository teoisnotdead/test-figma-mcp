'use client';

import React, { useState } from 'react';
import Header from '@/components/organisms/Header';
import NavigationSidebar from '@/components/organisms/NavigationSidebar';
import StatsCardsGrid from '@/components/organisms/StatsCardsGrid';
import CalendarCard from '@/components/organisms/CalendarCard';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      <div className="flex flex-1 items-stretch relative">
        {/* Overlay para cuando el sidebar está abierto en mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
        <NavigationSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <main className="flex-1 p-4 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Dashboard Principal</h1>
          <p className="mb-4">Resumen de operaciones y indicadores clave.</p>
          <StatsCardsGrid />
          <CalendarCard />
        </main>
      </div>
    </div>
  );
}
