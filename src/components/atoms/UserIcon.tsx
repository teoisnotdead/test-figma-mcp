import React from 'react';
import { USER_ICON_AVATAR } from '@/constants/imagePaths';

interface UserIconProps {
  size?: "32" | "28";
}

const UserIcon: React.FC<UserIconProps> = ({
  size = "32",
}) => {
  if (size === "28") {
    return (
      <div className="content-stretch flex gap-[8.75px] items-center relative size-full">
        <div className="bg-center bg-contain bg-no-repeat rounded-[1.468e+07px] shrink-0 size-[20px]" style={{ backgroundImage: `url('${USER_ICON_AVATAR}')` }} />
      </div>
    );
  }
  return (
    <div className="content-stretch flex gap-[10px] items-center relative size-full">
      <div className="bg-center bg-contain bg-no-repeat rounded-[1.67772e+07px] shrink-0 size-[32px]" style={{ backgroundImage: `url('${USER_ICON_AVATAR}')` }} />
    </div>
  );
};

export default UserIcon;
