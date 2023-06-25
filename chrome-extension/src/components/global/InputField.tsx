import React from 'react';

type InputFieldProps = {
    label: string;
  type: string;
  name: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    
};

const InputField:React.FC<InputFieldProps> = ({
    label,
    type,
    name,
    placeholder,
    onChange,
  }) => {
    
    return (
        <div>
            <label
            className='text-sm font-medium block-mb-2 text-gray-300'>
                {label}
            </label>
            <input 
             type={type}
             name={name}
             id={name}
             className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
             placeholder={placeholder}
            onChange={onChange}
             />
        </div>

    )
}
export default InputField;