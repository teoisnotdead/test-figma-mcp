import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  id,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  disabled,
  className,
  ...rest
}) => {
  const inputId = id || name || label ? `input-${id || name || label}` : undefined;

  return (
    <div className="relative w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[12px] relative rounded-[8px] w-full">
        <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder || (label ? `Ingrese ${label.toLowerCase()}` : "")}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`flex-grow bg-transparent outline-none font-['Inter:Medium',_sans-serif] font-medium text-[14px] text-gray-900 placeholder:text-gray-500 leading-[20px] ${className || ''} ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...rest}
        />
      </div>
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
