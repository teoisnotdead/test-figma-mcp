import React from 'react';
import { ICON_LOGO_DESKTOP, ICON_LOGO_MOBILE } from '@/constants/imagePaths';

interface IconLogoProps {
  sizeVariant?: "Mobile" | "Desktop";
}

const IconLogo: React.FC<IconLogoProps> = ({
  sizeVariant = "Mobile",
}) => {
  if (sizeVariant === "Desktop") {
    return (
      <div className="bg-[#193cb8] box-border content-stretch flex gap-[10px] items-center p-[8px] relative rounded-[8px] w-[90px] h-[40px]">
        <div className="relative shrink-0 size-[24px]">
          <img alt="Logo" className="block max-w-none size-full" src={ICON_LOGO_DESKTOP} />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#193cb8] box-border content-stretch flex gap-[8px] items-center p-[6.4px] relative rounded-[6.4px] w-[60px] h-[32px]">
      <div className="relative shrink-0 size-[19.2px]">
        <img alt="Logo" className="block max-w-none size-full" src={ICON_LOGO_MOBILE} />
      </div>
    </div>
  );
};

export default IconLogo;
