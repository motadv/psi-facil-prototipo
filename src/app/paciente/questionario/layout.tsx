import React from "react";

interface QuestionarioLayoutProps {
  children: React.ReactNode;
}

export default function QuestionarioLayout({
  children,
}: QuestionarioLayoutProps) {
  return (
    <div className="bg-foreground text-black w-full md:w-8/12 xl:w-6/12 mx-auto rounded-lg py-4 flex-1 flex flex-col min-h-0 overflow-clip">
      {children}
    </div>
  );
}
