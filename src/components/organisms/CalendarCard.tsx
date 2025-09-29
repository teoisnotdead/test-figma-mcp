'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  CALENDAR_ARROW_LEFT_ICON,
  CALENDAR_ARROW_RIGHT_ICON,
} from '@/constants/imagePaths';


const CalendarCard: React.FC<React.Component> = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 8)); // Cambiado a Septiembre de 2025

  const formatMonthYear = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  // Aquí se renderizaría el calendario. Usaré una versión simplificada y responsive
  // inspirada en el código Figma, pero enfocándome en la estructura adaptable.
  return (
    <div className="bg-white box-border flex flex-col gap-4 p-4 relative rounded-[16px] w-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)]">
      {/* Titulo del Calendario */}
      <div className="flex items-center justify-between w-full">
        <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-lg md:text-xl text-[#364153]">
          Calendario de Turnos
        </h2>
        <div className="flex items-center gap-4"> {/* Ajustado gap a 4 */}
          <button onClick={goToPreviousMonth} className="flex items-center justify-center size-6 cursor-pointer" aria-label="Mes anterior">
            <Image alt="Previous month" className="block size-4" src={CALENDAR_ARROW_LEFT_ICON} width={16} height={16} />
          </button>
          <span className="font-['Inter:Medium',_sans-serif] font-medium text-sm md:text-base text-[#364153] text-center whitespace-pre">
            {formatMonthYear(currentMonth)}
          </span>
          <button onClick={goToNextMonth} className="flex items-center justify-center size-6 cursor-pointer" aria-label="Mes siguiente">
            <Image alt="Next month" className="block size-4" src={CALENDAR_ARROW_RIGHT_ICON} width={16} height={16} />
          </button>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-2" />

      {/* Días y Horarios del Calendario */}
      <div className="bg-white w-full relative rounded-lg md:rounded-[12px] overflow-x-auto border border-gray-300">
        <div className="flex flex-col w-full">
          {/* Encabezado de la tabla (Horario, Días de la semana) */}
          <div className="flex flex-nowrap border-b border-gray-300 min-w-max"> {/* Reintroducido min-w-max */}
            <div className="flex-none p-3 md:p-4 w-[150px] font-['Inter:Semi_Bold',_sans-serif] font-semibold text-sm md:text-base text-center text-gray-700 leading-5 md:leading-6 border-r border-gray-300 flex items-center justify-center">Horario</div>
            {/* Días de la semana, ajustado para ser más responsive */}
            {["dom, 31 ago", "lun, 1 sept", "mar, 2 sept", "mié, 3 sept", "jue, 4 sept", "vie, 5 sept", "sáb, 6 sept"].map((day, index) => (
              <div key={index} className="flex-none p-3 md:p-4 w-[150px] text-center font-['Inter:Semi_Bold',_sans-serif] font-semibold text-sm md:text-base text-gray-700 leading-5 md:leading-6 border-r border-gray-300 last:border-r-0 flex items-center justify-center"> {/* Ancho 150px y last:border-r-0 */}
                {day}
              </div>
            ))}
          </div>

          {/* Filas de Turnos */}
          {["18:00-06:00", "06:00-18:00"].map((shiftTime, shiftIndex) => (
            <div key={shiftIndex} className="flex flex-nowrap border-b border-gray-300 last:border-b-0 min-w-max"> {/* Reintroducido min-w-max */}
              <div className="flex-none p-3 md:p-4 w-[150px] font-['Inter:Medium',_sans-serif] font-medium text-sm md:text-base text-gray-700 leading-5 md:leading-6 border-r border-gray-300 flex items-center justify-center">{shiftTime}</div>
              {/* Celdas de días, responsive */}
              {Array(7).fill(0).map((_, dayIndex) => (
                <div key={dayIndex} className="flex-none p-3 md:p-4 w-[150px] text-center font-['Inter:Regular',_sans-serif] font-normal text-xs md:text-sm text-[#364153] leading-4 md:leading-5 border-r border-gray-300 last:border-r-0 flex items-center justify-center"> {/* Ancho 150px y last:border-r-0 */}
                  Disponible
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarCard;
