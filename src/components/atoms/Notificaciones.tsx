import React from 'react';
import Image from 'next/image';
import { ICON_NOTIFICACIONES } from '@/constants/imagePaths';

interface NotificacionesProps {
  property1?: "Default" | "VarianMobilet2"; // En Figma se llama 'VarianMobilet2', pero usaremos 'Mobile' por claridad
}

const Notificaciones: React.FC<NotificacionesProps> = ({
}) => {
  // La variante 'VarianMobilet2' en Figma no presenta cambios visuales significativos en el propio icono,
  // solo parece ser un contenedor flexible. Podríamos simplificar a solo un estado 'Default'
  // y manejar cualquier adaptabilidad en el componente padre si fuera necesario.
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Property 1=Default" data-node-id="232:222">
      <div className="bg-red-600 rounded-[6px] shrink-0 size-[12px]" data-name="Rectangle" data-node-id="232:219" />
      <div className="relative shrink-0 size-[20px]" data-name="Frame" data-node-id="232:220">
        <Image alt="Notificaciones" className="block max-w-none size-full" src={ICON_NOTIFICACIONES} width={20} height={20} />
      </div>
    </div>
  );
};

export default Notificaciones;
