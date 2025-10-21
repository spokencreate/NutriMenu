// src/components/Button.tsx

import type { FC, ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: LucideIcon;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  icon: Icon,
  className = '',
}) => {
  let baseClasses =
    'inline-flex items-center justify-center gap-2 px-6 py-3 font-bold rounded-full shadow-lg transition duration-300 ease-in-out transform active:scale-95 disabled:opacity-50';

  if (variant === 'primary') {
    baseClasses += ' bg-amber-700 text-stone-50 hover:bg-amber-800 shadow-amber-600/50';
  } else if (variant === 'secondary') {
    baseClasses += ' border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50';
  } else if (variant === 'ghost') {
    baseClasses += ' text-gray-700 hover:bg-stone-200 shadow-none';
  }

  return (
    <button className={`${baseClasses} ${className}`} onClick={onClick}>
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
};

export default Button;
