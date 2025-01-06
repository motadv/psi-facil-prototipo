import { Psicologo } from "@/app/model/Psicologo";
import React from "react";
import PsicologosListPageClient from "./PsicologosListPage.client";

export default async function ListaPsicologosPage() {
  const res = await fetch("http://localhost:3000/psicologos.json", {
    next: { revalidate: 0 },
  });

  const psicologos: Psicologo[] = await res.json();

  return <PsicologosListPageClient psicologos={psicologos} />;
}
