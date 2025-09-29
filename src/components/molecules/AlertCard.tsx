import React from 'react';

interface AlertCardProps {
  size?: "Large" | "Medium" | "Small";
  title: string;
  message: string;
  icon?: React.ReactNode;
  onClose?: () => void;
}

const AlertCard: React.FC<AlertCardProps> = ({
  size = "Large",
  title,
  message,
  icon,
  onClose,
}) => {
  const cardClasses = "bg-amber-100 box-border content-stretch flex flex-col items-start relative rounded-[8px] size-full ";
  let titleClasses = "font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-red-800 ";
  let messageClasses = "font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-red-800 w-full ";
  let iconSizeClasses = "";
  let paddingClasses = "";
  let gapBetweenElements = "";
  let gapBetweenTextAndClose = "";

  // Set size-specific styles
  if (size === "Large") {
    paddingClasses = "p-[14px]";
    gapBetweenElements = "gap-[10px]";
    gapBetweenTextAndClose = "gap-[9px]";
    iconSizeClasses = "size-[24px]";
    titleClasses += "text-[14px] leading-[20px]";
    messageClasses += "font-['Inter:Regular',_sans-serif] font-normal text-[16px] leading-[24px]";
  } else if (size === "Medium") {
    paddingClasses = "p-[12px]";
    gapBetweenElements = "gap-[6px]";
    gapBetweenTextAndClose = "gap-[6px]";
    iconSizeClasses = "size-[16.667px]";
    titleClasses += "text-[12px] leading-[16px]";
    messageClasses += "text-[14px] leading-[20px]";
  } else if (size === "Small") {
    paddingClasses = "p-[8px]";
    gapBetweenElements = "gap-[4px]";
    gapBetweenTextAndClose = "gap-[4px]";
    iconSizeClasses = "size-[13.5px]";
    titleClasses += "text-[12px] leading-[16px]";
    messageClasses += "text-[12px] leading-[16px]";
  }

  return (
    <div className={cardClasses + paddingClasses}>
      <div aria-hidden="true" className="absolute border border-amber-400 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className={`content-stretch flex flex-col items-start relative shrink-0 w-full ${gapBetweenElements}`}>
        <div className={`content-stretch flex flex-col items-start relative shrink-0 w-full ${gapBetweenTextAndClose}`}>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            {icon && (
              <div className={`overflow-clip relative shrink-0 ${iconSizeClasses}`}>
                {icon}
              </div>
            )}
            <div className={titleClasses}>
              <p>{title}</p>
            </div>
          </div>
          <div className={messageClasses}>
            <p>{message}</p>
          </div>
        </div>
        {onClose && (
          <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-full">
            <button onClick={onClose} className={`overflow-clip relative shrink-0 ${iconSizeClasses} cursor-pointer`}>
              <span className="text-red-800">✖</span> {/* Placeholder for close icon */}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlertCard;
