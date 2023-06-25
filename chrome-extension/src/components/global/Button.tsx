import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset'; // New prop for button type
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, className,
    type,
     children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-orange-400 text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent transition duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;