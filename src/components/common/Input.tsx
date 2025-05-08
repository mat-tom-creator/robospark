import React from "react";

interface InputProps {
  type: string;
  name: string;
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-navy font-medium mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors
          ${error ? "border-accent" : "border-gray-300"}`}
        required={required}
      />
      {error && <p className="mt-1 text-accent text-sm">{error}</p>}
    </div>
  );
};

export default Input;
