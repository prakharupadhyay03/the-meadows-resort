import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'dark' | 'ghost' | 'taupe'
  size = 'md',        // 'sm' | 'md' | 'lg'
  className = '',
  icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-sans tracking-[0.16em] uppercase text-xs font-semibold transition-all duration-300 select-none focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-[11px] space-x-2",
    md: "px-6 py-3 text-xs space-x-2.5",
    lg: "px-8 py-4 text-xs md:text-[13px] space-x-3 tracking-[0.2em]"
  }[size] || "px-6 py-3 text-xs space-x-2.5";

  const variantStyles = {
    primary: "bg-sage-500 hover:bg-sage-600 text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
    secondary: "bg-beige hover:bg-beige-dark text-charcoal border border-taupe/30 hover:border-taupe/60 shadow-sm",
    outline: "bg-transparent border border-sage-500 text-sage-600 hover:bg-sage-500 hover:text-white transition-colors duration-300",
    outlineWhite: "bg-transparent border border-white/70 text-white hover:bg-white hover:text-botanical transition-colors duration-300",
    dark: "bg-botanical hover:bg-botanical-deep text-white shadow-sm hover:shadow-md hover:-translate-y-0.5",
    taupe: "bg-taupe hover:bg-taupe-dark text-white shadow-sm hover:shadow-md hover:-translate-y-0.5",
    ghost: "bg-transparent text-charcoal hover:text-sage-600 underline underline-offset-8 decoration-sage-400 hover:decoration-sage-600 p-0"
  }[variant] || "";

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer";

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${disabledStyles} ${className}`;

  const renderContent = () => (
    <>
      {icon && iconPosition === 'left' && <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`} {...props}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`group ${combinedClasses}`} target="_blank" rel="noopener noreferrer" {...props}>
        {renderContent()}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`group ${combinedClasses}`} {...props}>
      {renderContent()}
    </button>
  );
};

export default Button;
