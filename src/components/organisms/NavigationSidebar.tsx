'use client';

import React, { useState } from 'react';
import BotomMenu from '@/components/molecules/BotomMenu';
import CardAlerta from '@/components/molecules/CardAlerta';
import { useRouter } from 'next/navigation';

interface NavigationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const router = useRouter();

  const handleNavigationClick = (item: string, path: string) => {
    setActiveItem(item);
    router.push(path);
    onClose(); // Cerrar sidebar al navegar en mobile
  };

  const handleCloseAlert = () => {
    alert("Alerta cerrada!"); // Lógica para cerrar la alerta
  };

  return (
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-[-256px]'} transition-transform duration-300 ease-in-out bg-white z-30 flex flex-col gap-[40px] items-center p-[24px] w-[256px] md:relative md:flex md:translate-x-0 md:min-h-screen md:w-[256px] flex-shrink-0`} data-name="Menu">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)]" />
      {/* Botón de cierre para móvil */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:hidden z-40"
        aria-label="Cerrar menú"
      >
        <span className="text-2xl font-bold text-gray-800">X</span>
      </button>
      <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Card Menu">
          <BotomMenu
            label="Dashboard"
            iconType="dash"
            property1={activeItem === "Dashboard" ? "activado" : "desactivado"}
            onClick={() => handleNavigationClick("Dashboard", "/")}
          />
          <BotomMenu
            label="Personas"
            iconType="person"
            property1={activeItem === "Personas" ? "activado" : "desactivado"}
            onClick={() => handleNavigationClick("Personas", "/personas")}
          />
          <BotomMenu
            label="Turnos"
            iconType="calendar"
            property1={activeItem === "Turnos" ? "activado" : "desactivado"}
            onClick={() => handleNavigationClick("Turnos", "/turnos")}
          />
          <BotomMenu
            label="Reportes"
            iconType="report"
            property1={activeItem === "Reportes" ? "activado" : "desactivado"}
            onClick={() => handleNavigationClick("Reportes", "/reportes")}
          />
        </div>
        <CardAlerta
          title="Alerta de Seguridad"
          message="Revisión programada de equipos en Sector B a las 14:00"
          onClose={handleCloseAlert}
        />
      </div>
    </div>
  );
};

export default NavigationSidebar;
