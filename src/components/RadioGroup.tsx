// RadioGroup.tsx
import React from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  name: string;
  value: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, name, value, onChange }) => {
  return (
    <div className="flex space-x-4">
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="form-radio h-4 w-4 text-yellow-500 border-gray-300 focus:ring-yellow-500"
          />
          <span className="text-sm font-medium text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;