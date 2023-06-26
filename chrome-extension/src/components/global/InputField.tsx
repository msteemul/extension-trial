import React, { forwardRef, InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, ...rest }, ref) => {
    return (
      <div>
        <label className='text-sm font-medium block-mb-2 text-gray-300'>
          {label}
        </label>
        <input
          {...rest}
          ref={ref}
          className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
        />
      </div>
    );
  }
);

export default InputField;
