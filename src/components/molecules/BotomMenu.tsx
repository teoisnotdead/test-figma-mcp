import React from 'react';
import NavigationIcon from '@/components/atoms/NavigationIcon';

interface BotomMenuProps {
  property1?: "activado" | "desactivado";
  label: string;
  iconType: "calendar" | "dash" | "person" | "report";
  onClick?: () => void;
}

const BotomMenu: React.FC<BotomMenuProps> = ({
  property1 = "desactivado",
  label,
  iconType,
  onClick,
}) => {
  const isActive = property1 === "activado";
  const buttonClasses = `box-border content-stretch flex flex-col gap-[10px] items-start px-[13px] py-[9px] relative rounded-[8px] size-full cursor-pointer 
    ${isActive ? "bg-blue-100" : "hover:bg-gray-100"}`;
  const textClasses = `font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap 
    ${isActive ? "text-[#1c398e]" : "text-stone-800"}`;

  return (
    <button className={buttonClasses} onClick={onClick} aria-label={label}>
      {isActive && (
        <div aria-hidden="true" className="absolute border border-blue-300 border-solid inset-0 pointer-events-none rounded-[8px]" />
      )}
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Dashboard">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
          <NavigationIcon type={iconType} />
        </div>
        <div className={textClasses} data-name="text">
          <p className="leading-[24px] whitespace-pre">{label}</p>
        </div>
      </div>
    </button>
  );
};

export default BotomMenu;
