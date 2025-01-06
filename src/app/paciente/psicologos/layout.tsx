import React from "react";

interface PsicologosLayoutProps {
  children: React.ReactNode;
}

export default function PsicologosLayout({ children }: PsicologosLayoutProps) {
  return (
    <div className="text-foreground rounded-lg flex-1 flex flex-col min-h-0">
      {children}
    </div>
  );
}
