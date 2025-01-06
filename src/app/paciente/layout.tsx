import { FileSearch, LogOut, User2 } from "lucide-react";
import Link from "next/link";

interface PacienteLayoutProps {
  children: React.ReactNode;
}

export default function PacienteLayout({ children }: PacienteLayoutProps) {
  return (
    <div className="flex flex-col h-screen pb-14">
      <div className="flex justify-between text-foreground/75">
        {/* Left Side */}
        <div className="flex justify-start p-2 gap-2 flex-none">
          <Link
            href="/paciente/questionario"
            className="hover:text-foreground/75 bg-transparent hover:bg-white/15 p-2 rounded-full flex gap-2 items-center"
            title="Home"
          >
            <FileSearch className="h-6" />
            Refazer preferências
          </Link>
        </div>
        {/* Right Side */}
        <div className="flex justify-end p-2 flex-none">
          <Link
            href="/"
            className="hover:text-foreground/75 bg-transparent hover:bg-white/15 p-2 rounded-full flex items-center group"
            title="Perfil"
          >
            <User2 className="h-6" />
            <p className="overflow-hidden whitespace-nowrap w-0 group-hover:w-[200px] max-w-fit transition-[width] duration-300 ml-2">
              Perfil
            </p>
          </Link>
          <Link
            href="/logout"
            className="hover:text-foreground/75 bg-transparent hover:bg-white/15 p-2 rounded-full flex items-center group"
            title="Sair"
          >
            <LogOut className="h-6" />
            <p className="overflow-hidden whitespace-nowrap w-0 group-hover:w-[200px] max-w-fit transition-[width] duration-300 ml-2">
              Sair
            </p>
          </Link>
        </div>
      </div>

      {children}
    </div>
  );
}
