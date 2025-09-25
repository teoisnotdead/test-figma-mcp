import React from 'react';
import Image from 'next/image';
import { ALERT_ICON } from '@/constants/imagePaths';

interface CardAlertaProps {
  title: string;
  message: string;
  onClose?: () => void;
}

const CardAlerta: React.FC<CardAlertaProps> = ({
  title,
  message,
  onClose,
}) => {
  return (
    <div className="bg-amber-100 box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-[16px] relative rounded-[8px] size-full" data-name="Card alerta">
      <div aria-hidden="true" className="absolute border border-amber-400 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full" data-name="Alerta/ Mensaje">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <div className="relative shrink-0 size-[16px]" data-name="Frame">
              <Image alt="Alert Icon" className="block max-w-none size-full" src={ALERT_ICON} width={16} height={16} />
            </div>
            <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-red-800">
              <p className="leading-[20px] whitespace-pre">{title}</p>
            </div>
          </div>
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-red-800 w-full">
            <p className="leading-[16px]">{message}</p>
          </div>
        </div>
        {onClose && (
          <button type="button" className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[12px] text-red-800 text-right w-full cursor-pointer" onClick={onClose} aria-label="Cerrar alerta">
            <p className="leading-[16px]">X</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default CardAlerta;
