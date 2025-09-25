import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  size?: "Large" | "Medium" | "Small";
  variant?: "Default" | "Disabled";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  size = "Large",
  variant = "Default",
  onClick,
  type = "button", // Default type to 'button'
  className = "",
}) => {
  let buttonClasses = "box-border content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[8px] relative rounded-[8px] size-full ";
  let textClasses = "font-['Inter:Regular',_sans-serif] font-normal not-italic relative shrink-0 text-nowrap ";
  let iconSizeClasses = "";
  let paddingClasses = "";
  let textSizeClasses = "";
  let leadingClasses = "";

  // Set size-specific styles
  if (size === "Large") {
    paddingClasses = "px-[14px] py-[8px]"; // From Figma
    textSizeClasses = "text-[18px]"; // From Figma
    leadingClasses = "leading-[28px]"; // From Figma
    iconSizeClasses = "size-[24px]"; // From Figma
  } else if (size === "Medium") {
    paddingClasses = "px-[14px] py-[8px]"; // From Figma
    textSizeClasses = "text-[16px]"; // From Figma
    leadingClasses = "leading-[24px]"; // From Figma
    iconSizeClasses = "size-[24px]"; // From Figma
  } else if (size === "Small") {
    paddingClasses = "px-[14px] py-[8px]"; // From Figma
    textSizeClasses = "text-[14px]"; // From Figma
    leadingClasses = "leading-[20px]"; // From Figma
    iconSizeClasses = "size-[16.667px]"; // From Figma
  }

  // Set variant-specific styles
  if (variant === "Default") {
    buttonClasses += "bg-amber-600 hover:bg-amber-800 "; // Aplicar hover aquí
    textClasses += "text-white ";
  } else if (variant === "Disabled") {
    buttonClasses += "bg-gray-400 ";
    textClasses += "text-gray-600 "; // Cambiado de text-slate-200 a text-gray-600
  }

  return (
    <button type={type} className={`${buttonClasses}${paddingClasses}${className} ${variant === "Disabled" ? " cursor-not-allowed" : ""}`} onClick={onClick} disabled={variant === "Disabled"}>
      {icon && (
        <div className={`overflow-clip relative shrink-0 ${iconSizeClasses}`}>
          {icon}
        </div>
      )}
      <div className={textClasses + textSizeClasses}>
        <p className={leadingClasses + " whitespace-pre"}>{children}</p>
      </div>
    </button>
  );
};

export default Button;
