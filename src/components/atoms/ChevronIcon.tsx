import React from 'react';
import { CHEVRON_ICON_VECTOR } from '@/constants/imagePaths';

interface ChevronIconProps {
  direction?: "Down" | "Up";
  onClick?: () => void;
}

const ChevronIcon: React.FC<ChevronIconProps> = ({
  direction = "Down",
  onClick,
}) => {
  // El SVG de Figma solo muestra la flecha hacia abajo. 
  // Para la dirección 'Up', necesitaríamos rotar el SVG o tener un asset diferente.
  // Por ahora, solo renderizaremos la flecha hacia abajo.
  return (
    <button className="box-border content-stretch cursor-pointer flex flex-col gap-[10px] items-start px-[3px] py-[5px] relative size-full" onClick={onClick}>
      <div className="h-[4.667px] relative shrink-0 w-[9.333px]">
        <div className="absolute inset-[-21.43%_-10.71%]">
          <img alt={`Chevron ${direction}`} className="block max-w-none size-full" src={CHEVRON_ICON_VECTOR} />
        </div>
      </div>
    </button>
  );
};

export default ChevronIcon;
