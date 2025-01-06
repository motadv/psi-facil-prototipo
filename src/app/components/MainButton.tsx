import React from "react";

interface MainButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
}

export default function MainButton({
  onClick,
  children,
  className,
}: MainButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-psi-primary px-6 py-2 rounded-md hover:bg-psi-secondary hover:underline transition-all duration-100 ${className}`}
    >
      {children}
    </button>
  );
}
