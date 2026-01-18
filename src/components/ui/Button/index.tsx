import React, { ReactNode } from "react";

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const buttonStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--secondary-color)',
    border: 'none',
    padding: '4px 6px',
    fontSize: '14px',
    fontWeight: '700',
    cursor: 'pointer',
  },
  secondary: {
    backgroundColor: 'var(--secondary-color)',
    color: 'var(--primary-color)',
    border: 'none',
    padding: '4px 6px',
    fontSize: '14px',
    fontWeight: '700',
    cursor: 'pointer'
  }
}

export function Button({ variant = 'primary', children, className, fullWidth = false }: ButtonProps) {

  const mixedStyles: React.CSSProperties = {
    ...buttonStyles[variant],
    width: fullWidth ? '100%' : 'auto',
  };

  return (
    <button style={mixedStyles} className={className}>{children}</button>
  )
}
