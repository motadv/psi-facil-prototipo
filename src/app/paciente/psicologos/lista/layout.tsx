import React from "react";

interface ListaPsicologosLayoutProps {
  children: React.ReactNode;
}

export default function ListaPsicologosLayout({
  children,
}: ListaPsicologosLayoutProps) {
  return (
    <div className="bg-foreground text-psi-primary rounded-lg flex-1 flex flex-col min-h-0 w-full md:w-10/12 mx-auto overflow-clip p-3">
      {children}
    </div>
  );
}
