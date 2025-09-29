import React from 'react';
import Image from 'next/image';
import {
  ICON_MENU_GESTION_ESCUDO,
  ICON_MENU_GESTION_PEOPLE,
  ICON_MENU_GESTION_ALERT,
  ICON_MENU_GESTION_TIME,
  ICON_MENU_GESTION_CHECK,
  ICON_MENU_GESTION_FLECHA,
} from '@/constants/imagePaths';

interface IconMenuGestionProps {
  type?: "alret" | "escudo" | "flecha" | "people" | "time" | "check";
}

const IconMenuGestion: React.FC<IconMenuGestionProps> = ({
  type = "check",
}) => {
  const iconMap: Record<NonNullable<IconMenuGestionProps['type']>, React.ReactNode> = {
    "escudo": (
      <div className="relative size-full">
        <div className="absolute bg-[#b9f8cf] left-0 rounded-[11.25px] size-[45px] top-0" />
        <div className="absolute left-[5.63px] size-[33.75px] top-[5.63px]">
          <Image alt="Icono de Escudo" className="block max-w-none size-full" src={ICON_MENU_GESTION_ESCUDO} width={34} height={34} />
        </div>
      </div>
    ),
    "people": (
      <div className="relative size-full">
        <div className="absolute bg-[#b9f8cf] left-0 rounded-[11.25px] size-[45px] top-0" />
        <div className="absolute left-[5.63px] size-[33.75px] top-[5.63px]">
          <Image alt="Icono de Personas" className="block max-w-none size-full" src={ICON_MENU_GESTION_PEOPLE} width={34} height={34} />
        </div>
      </div>
    ),
    "alret": (
      <div className="relative size-full">
        <div className="absolute bg-[#ffe2e2] left-0 rounded-[11.25px] size-[45px] top-0" />
        <div className="absolute left-[5.63px] size-[33.75px] top-[5.63px]">
          <Image alt="Icono de Alerta" className="block max-w-none size-full" src={ICON_MENU_GESTION_ALERT} width={34} height={34} />
        </div>
      </div>
    ),
    "time": (
      <div className="relative size-full">
        <div className="absolute bg-[#fee685] left-0 rounded-[11.25px] size-[45px] top-0" />
        <div className="absolute left-[5.63px] size-[33.75px] top-[5.63px]">
          <Image alt="Icono de Tiempo" className="block max-w-none size-full" src={ICON_MENU_GESTION_TIME} width={34} height={34} />
        </div>
      </div>
    ),
    "check": (
      <div className="relative size-full">
        <div className="absolute bg-[#bedbff] left-0 rounded-[11.25px] size-[45px] top-0" />
        <div className="absolute left-[5.63px] size-[33.75px] top-[5.63px]">
          <Image alt="Icono de Verificación" className="block max-w-none size-full" src={ICON_MENU_GESTION_CHECK} width={34} height={34} />
        </div>
      </div>
    ),
    "flecha": (
      <div className="relative size-full">
        <div className="absolute bg-[#cad5e2] left-0 rounded-[11.25px] size-[45px] top-0" />
        <div className="absolute left-[5.63px] size-[33.75px] top-[5.63px]">
          <Image alt="Icono de Flecha" className="block max-w-none size-full" src={ICON_MENU_GESTION_FLECHA} width={34} height={34} />
        </div>
      </div>
    ),
  };

  return <>{iconMap[type]}</>;
};

export default IconMenuGestion;
