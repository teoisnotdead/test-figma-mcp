import React from 'react';
import IconMenuGestion from '@/components/atoms/IconMenuGestion';

interface MenuGestionCardProps {
  title: string;
  value: string;
  subtitle: string;
  iconType?: "alret" | "escudo" | "flecha" | "people" | "time" | "check";
}

const MenuGestionCard: React.FC<MenuGestionCardProps> = ({
  title,
  value,
  subtitle,
  iconType = "check",
}) => {
  return (
    <div className="bg-white box-border flex flex-col gap-[10px] items-start p-4 md:p-[25px] relative rounded-[12px] w-full">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex items-start relative w-full">
        <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start leading-[0] not-italic relative self-stretch text-[#364153] overflow-hidden">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[18px]">
            <p className="leading-[28px] break-words">{title}</p>
          </div>
          <div className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-[36px]">
            <p className="leading-[40px] break-words">{value}</p>
          </div>
        </div>
        <div className="relative shrink-0 size-[45px]">
          <IconMenuGestion type={iconType} />
        </div>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#364153] text-[16px] w-full">
        <p className="leading-[24px]">{subtitle}</p>
      </div>
    </div>
  );
};

export default MenuGestionCard;
