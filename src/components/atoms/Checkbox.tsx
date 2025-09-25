import React from 'react';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  id?: string;
  name?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  id,
  name,
}) => {
  const checkboxId = id || name ? `checkbox-${id || name}` : undefined;

  return (
    <button
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange?.(!checked)}
      className="block cursor-pointer relative size-[24px]"
    >
      <div className="absolute bg-white left-[4px] rounded-[2px] size-[16px] top-[4px]">
        <div aria-hidden="true" className="absolute border border-gray-400 border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        {checked && (
          <span className="absolute inset-0 flex items-center justify-center text-green-600 text-lg">✔</span>
        )} 
      </div>
      <input
        type="checkbox"
        id={checkboxId}
        name={name}
        checked={checked}
        onChange={() => {}} // El onChange se maneja en el botón padre
        className="sr-only"
      />
    </button>
  );
};

export default Checkbox;
