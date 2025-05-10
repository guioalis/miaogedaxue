import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  onClick,
  ...props
}) => {
  // Style variations
  const baseStyles = 'inline-block font-medium rounded-md transition-all duration-200 text-center';
  
  const variantStyles = {
    primary: 'bg-primary-900 hover:bg-primary-800 text-white',
    secondary: 'bg-secondary-300 hover:bg-secondary-400 text-primary-900',
    outline: 'border border-primary-900 text-primary-900 hover:bg-primary-50'
  };
  
  const sizeStyles = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg'
  };
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  // Render link if 'to' or 'href' prop is provided
  if (to) {
    return (
      <Link to={to} className={buttonStyles} {...props}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={buttonStyles} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  
  // Otherwise render button
  return (
    <button className={buttonStyles} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;