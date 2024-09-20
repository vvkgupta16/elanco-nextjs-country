import React from 'react';

interface GenericButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<GenericButtonProps> = ({
  onClick,
  className = '',
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`m-5 px-4 py-2 rounded-lg transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
