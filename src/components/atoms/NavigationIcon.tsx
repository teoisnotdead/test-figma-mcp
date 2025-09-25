import React from 'react';
import Image from 'next/image';
import {
  DASHBOARD_ICON,
  CALENDAR_ICON,
  PERSON_ICON,
  REPORT_ICON,
} from '@/constants/imagePaths';

interface NavigationIconProps {
  type?: "calendar" | "dash" | "person" | "report";
}

const NavigationIcon: React.FC<NavigationIconProps> = ({ type = "dash" }) => {
  const iconMap: Record<NonNullable<NavigationIconProps['type']>, React.ReactNode> = {
    "report": (
      <div className="relative size-full" data-name="Property 1=report">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-6.667%]">
            <Image alt="Report Icon" className="block max-w-none size-full" src={REPORT_ICON} width={24} height={24} />
          </div>
        </div>
      </div>
    ),
    "calendar": (
      <div className="relative size-full" data-name="Property 1=calendar">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-6.667%]">
            <Image alt="Calendar Icon" className="block max-w-none size-full" src={CALENDAR_ICON} width={24} height={24} />
          </div>
        </div>
      </div>
    ),
    "person": (
      <div className="relative size-full" data-name="Property 1=person">
        <div className="absolute bottom-[12.5%] left-0 right-0 top-[9.38%]" data-name="Vector">
          <Image alt="Person Icon" className="block max-w-none size-full" src={PERSON_ICON} width={24} height={24} />
        </div>
      </div>
    ),
    "dash": (
      <div className="relative size-full" data-name="Property 1=dash">
        <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-8.57%_-6.67%]">
            <Image alt="Dashboard Icon" className="block max-w-none size-full" src={DASHBOARD_ICON} width={24} height={24} />
          </div>
        </div>
      </div>
    ),
  };

  return <>{iconMap[type]}</>;
};

export default NavigationIcon;
