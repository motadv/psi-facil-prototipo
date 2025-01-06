"use client";

import { Psicologo } from "@/app/model/Psicologo";
import {
  ListFilter,
  Mail,
  MapPin,
  Phone,
  Search,
  Star,
  Stethoscope,
  Video,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import Image from "next/image";

interface PsicologosListPageClientProps {
  children?: React.ReactNode;
  psicologos: Psicologo[];
}

export default function PsicologosListPageClient({
  psicologos,
}: PsicologosListPageClientProps) {
  //Get favoritos from query params
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [favoritos, setFavoritos] = React.useState<number[]>([]);

  React.useEffect(() => {
    const favoritos = searchParams.get("favoritos");
    const psi = searchParams.get("psi");

    if (favoritos) {
      setFavoritos(favoritos.split(",").map(Number));
    }

    if (psi) {
      setSelected(Number(psi));
    }

    router.replace(pathname);
  }, []);

  const isFavorito = (index: number) => favoritos.includes(index);
  const handleClickFavorito = (index: number) => {
    if (isFavorito(index)) {
      setFavoritos(favoritos.filter((i) => i !== index));
    } else {
      setFavoritos([...favoritos, index]);
    }
  };

  const [selected, setSelected] = React.useState<number | null>(null);

  useEffect(() => {
    console.log("Selected Index: ", selected);
    if (selected === null) return;
    console.log("Psicologo selecionado: ", psicologos[selected]);
  }, [selected]);

  const filterOptions = [
    "Preço crescente",
    "Preço decrescente",
    "Ordem alfabética",
  ];
  const [currentFilter, setCurrentFilter] = React.useState(0);
  const handleClickFilter = () => {
    setCurrentFilter((prev) => (prev + 1) % filterOptions.length);
  };

  return (
    <div className="h-full flex flex-col overflow-clip gap-2">
      <div
        id="top-bar"
        className="col-span-12 flex-none text-center border-b border-psi-primary pb-2"
      >
        <h1 className="text-3xl font-bold">Psicólogos para você</h1>
        <p className="text-lg">
          Esta é uma seleção de psicólogos que podem te ajudar. Encontre o ideal
          para você! 🌟
        </p>
        <p>
          Para encontrar outros profissionais, utilize a barra de busca e os
          filtros.
        </p>
        <div className="flex justify-center items-center mt-2 gap-8">
          <div
            className="
          bg-white flex
          flex-shrink flex-grow-0 min-w-[50%] w-fit
          border-2 border-psi-primary rounded-full px-4
          "
          >
            <input
              type="text"
              placeholder="Nome do psicólogo ou especialidade"
              className="
                focus:outline-none
                py-2
                min-w-0
                w-full
                text-gray-500
                whitespace-nowrap overflow-clip text-ellipsis
                bg-transparent
              "
              disabled
            />
            <button type="button">
              <Search className="h-6 w-6 text-psi-primary hover:text-psi-primary/50" />
            </button>
          </div>
          <button
            className="
           bg-white flex items-center
            flex-none w-[200px] min-w-[200px]
            border-2 border-psi-primary rounded-full px-4
          "
            type="button"
            onClick={handleClickFilter}
            title={filterOptions[currentFilter]}
          >
            <ListFilter size={24} />
            <p className="py-2 w-full whitespace-nowrap overflow-clip text-ellipsis font-semibold">
              {filterOptions[currentFilter]}
            </p>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-2 flex-1 overflow-clip min-h-0">
        <div
          id="list"
          className={`${
            selected !== null ? "col-span-7" : "col-span-full"
          } overflow-y-auto space-y-2 pr-5`}
        >
          {psicologos.map((psicologo, index) => (
            <div
              key={psicologo.email}
              className="flex flex-row gap-2 border-b border-psi-primary pb-2"
              onClick={() => setSelected(index)}
            >
              <div className="flex-none rounded-full overflow-hidden w-20 h-20 m-1">
                <Image
                  src={`/images/pessoa${index + 1}.jpg`}
                  alt={`Foto de ${psicologo.nomeCompleto}`}
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex-1">
                <h1 className="text-lg font-semibold flex gap-2">
                  <p>{psicologo.nomeCompleto}</p>
                  <p>{psicologo.CRP}</p>
                  <p className="text-foreground bg-psi-primary px-2 py-1 text-sm rounded-full w-fit">
                    {"R$ "}
                    {psicologo.valorConsulta.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </h1>
                <div className="flex gap-2">
                  {psicologo.atendePresencial && (
                    <p className="flex items-center justify-start gap-1">
                      <MapPin size={18} />
                      {psicologo.enderecoDeAtendimento}
                    </p>
                  )}
                  {psicologo.atendeOnline && (
                    <p className="flex items-center justify-start gap-1">
                      <Video size={18} />
                      Atendimento online
                    </p>
                  )}
                </div>
                <p className="flex items-center justify-start gap-1">
                  <Mail size={18} />
                  {psicologo.email}
                </p>
                <p className="flex items-center justify-start gap-1">
                  <Phone size={18} />
                  {psicologo.telefone}
                </p>
                <p className="flex items-center justify-start gap-1">
                  <Stethoscope size={18} />
                  {psicologo.especialidades.join(", ")}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => {
                    handleClickFavorito(index);
                  }}
                  className="bg-psi-primary hover:bg-psi-secondary transition-colors text-foreground p-1 rounded-lg"
                >
                  {isFavorito(index) ? (
                    <Star
                      size={20}
                      className={"text-yellow-500"}
                      fill="#eab308"
                    />
                  ) : (
                    <Star size={20} className="text-white" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
        {selected !== null && (
          <div
            id="extra"
            className="col-span-5 border-l border-psi-primary p-2"
          >
            <div className="space-y-2">
              <div className="flex gap-2">
                <Image
                  src={`/images/pessoa${selected + 1}.jpg`}
                  alt="Foto"
                  width={192}
                  height={192}
                  className="w-48 h-48 rounded-lg"
                />
                <div className="flex-1">
                  <h1 className="text-lg font-semibold flex gap-2 break-all flex-wrap">
                    <p>{psicologos[selected].nomeCompleto}</p>
                    <p>{psicologos[selected].CRP}</p>
                  </h1>
                  <p className="text-foreground bg-psi-primary px-2 py-1 text-sm rounded-full w-fit whitespace-nowrap mb-2">
                    {"R$ "}
                    {psicologos[selected].valorConsulta.toLocaleString(
                      "pt-BR",
                      {
                        minimumFractionDigits: 2,
                      }
                    )}
                  </p>
                  <div className="gap-2 overflow-clip">
                    {psicologos[selected].atendePresencial && (
                      <p className="flex items-center justify-start gap-1 whitespace-nowrap overflow-clip text-ellipsis">
                        <MapPin size={18} />
                        {psicologos[selected].enderecoDeAtendimento}
                      </p>
                    )}
                    {psicologos[selected].atendeOnline && (
                      <p className="flex items-center justify-start gap-1 whitespace-nowrap overflow-clip text-ellipsis">
                        <Video size={18} />
                        Atendimento online
                      </p>
                    )}
                  </div>
                  <p
                    className="flex items-center justify-start gap-1 overflow-clip text-ellipsis"
                    title={psicologos[selected].email}
                  >
                    <Mail size={18} />
                    {psicologos[selected].email}
                  </p>
                  <p className="flex items-center justify-start gap-1">
                    <Phone size={18} />
                    {psicologos[selected].telefone}
                  </p>
                  <p className="flex items-start justify-start">
                    <Stethoscope size={18} className="mt-1 mr-1" />
                    {psicologos[selected].especialidades.join(", ")}
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Horários</h2>
                <ul className="flex gap-2 flex-wrap">
                  {psicologos[selected].horarios.map((horario) => (
                    <li
                      key={horario + selected.toString()}
                      className="w-20 border-4 border-psi-primary px-4 text-psi-primary font-bold text-center"
                    >
                      {horario}
                    </li>
                  ))}
                </ul>
              </div>
              {psicologos[selected].atendePresencial && (
                <div className="text-center">
                  <h2 className="text-lg font-semibold">Localização</h2>
                  <p>{psicologos[selected].enderecoDeAtendimento}</p>
                  <Image
                    src={`/images/map.webp`}
                    alt="Foto"
                    width={256}
                    height={256}
                    className="mx-auto rounded-lg border-psi-primary border-2"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
