import React from 'react';
import Image from 'next/image';
import {
  ICON_LOGO,
  NOTIFICACIONES_ICON,
  USER_AVATAR,
  CHEVRON_ICON,
  HEADER_MENU_ICON,
} from '@/constants/imagePaths';

interface HeaderProps {
  companyName?: string;
  facilityName?: string;
  userName?: string;
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  companyName = "Minera Los Andes",
  facilityName = "Faena Principal - Sector Norte",
  userName = "Juan Díaz",
  onMenuClick,
}) => {
  return (
    <header className="bg-white box-border content-stretch flex items-center justify-between p-[16px] md:px-[24px] md:py-[16px] relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] w-full">
      {/* Sección izquierda: Menú móvil, Logo y Nombres de la empresa/faena */}
      <div className="basis-0 content-stretch flex gap-[4px] md:gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
        {/* Botón de menú para móvil */}
        <button onClick={onMenuClick} className="relative shrink-0 size-[24px] cursor-pointer md:hidden" aria-label="Abrir menú">
          <Image alt="Menu" className="block max-w-none size-full" src={HEADER_MENU_ICON} width={24} height={24} />
        </button>

        {/* Contenedor del logo */}
        <div className="bg-[#193cb8] box-border content-stretch flex gap-[8px] md:gap-[10px] items-center p-[6.4px] md:p-[8px] relative rounded-[6.4px] md:rounded-[8px] shrink-0 size-[32px] md:size-[40px]">
          {/* Logo */}
          <div className="relative shrink-0 size-[19.2px] md:size-[24px]">
            <Image alt="Logo" className="block max-w-none size-full" src={ICON_LOGO} width={19} height={19} />
          </div>
        </div>

        {/* Nombres de la empresa y faena */}
        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
          <div className="hidden md:block font-['Roboto:Medium',_sans-serif] font-medium relative shrink-0 text-[24px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[32px] whitespace-pre">{companyName}</p>
          </div>
          <div className="font-['Inter:Regular',_sans-serif] md:font-['Roboto:Medium',_sans-serif] font-normal md:font-medium leading-[0] not-italic relative shrink-0 text-[#364153] text-[12px] md:text-[14px] w-full">
            <p className="leading-[16px] md:leading-[20px] whitespace-pre">{facilityName}</p>
          </div>
        </div>
      </div>

      {/* Sección derecha: Notificaciones, Icono de usuario, Nombre y Chevron */}
      <div className="content-stretch flex gap-[4px] md:gap-[16px] items-center justify-end relative shrink-0 w-[132px] md:w-auto">
        {/* Icono de Notificaciones */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]">
          <div className="size-[30px]">
            <Image alt="Notificaciones" className="block max-w-none size-full" src={NOTIFICACIONES_ICON} width={30} height={30} />
          </div>
        </div>
        {/* Icono de Usuario */}
        <div className="content-stretch flex gap-[8.75px] md:gap-[10px] items-center relative shrink-0 size-[20px] md:size-[32px]">
          <div className="bg-center bg-contain bg-no-repeat rounded-full shrink-0 size-[20px] md:size-[32px]" style={{ backgroundImage: `url('${USER_AVATAR}')` }} />
        </div>
        {/* Nombre de Usuario */}
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px] text-center text-nowrap hidden md:block">
          <p className="leading-[20px] whitespace-pre">{userName}</p>
        </div>
        {/* Icono Chevron */}
        <button className="box-border content-stretch cursor-pointer flex items-center justify-center relative shrink-0 size-4" aria-label="Abrir menú de usuario">
          <div className="relative size-full">
            <Image alt="Chevron" className="block max-w-none size-full" src={CHEVRON_ICON} width={16} height={16} />
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;

