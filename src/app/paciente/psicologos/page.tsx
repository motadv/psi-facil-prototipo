import MatchPsicologosClient from "@/app/paciente/psicologos/MatchPsicologosClient";
import { Psicologo } from "@/app/model/Psicologo";
import React from "react";

export default async function PsicologosPage() {
  const res = await fetch("http://localhost:3000/psicologos.json", {
    next: { revalidate: 0 },
  });

  const psicologos: Psicologo[] = await res.json();

  return (
    <div className="w-full h-full flex items-center justify-center overflow-clip">
      <MatchPsicologosClient psicologos={psicologos} />
    </div>
  );
}
