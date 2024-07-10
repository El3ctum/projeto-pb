import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, onClick, children }) => {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded focus:outline-none',
        {
          'bg-blue-500 text-white hover:bg-blue-600': variant === 'primary',
          'bg-gray-500 text-white hover:bg-gray-600': variant === 'secondary',
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
