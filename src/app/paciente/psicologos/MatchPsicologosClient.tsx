"use client";

import { Psicologo } from "@/app/model/Psicologo";
import React, { useCallback, useMemo } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Coins,
  Eye,
  List,
  MapPin,
  PhoneCall,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface MatchPsicologosClientProps {
  psicologos: Psicologo[];
}

export default function MatchPsicologosClient({
  psicologos,
}: MatchPsicologosClientProps) {
  const router = useRouter();

  const [index, setIndex] = React.useState(0);

  const surroundingIndexes = useMemo(() => {
    const prev1 = (index - 1 + psicologos.length) % psicologos.length;
    const next1 = (index + 1) % psicologos.length;

    return [prev1, next1];
  }, [index, psicologos.length]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % psicologos.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + psicologos.length) % psicologos.length);
  };

  const currentPsicologo = psicologos[index];

  const [favoritos, setFavoritos] = React.useState<number[]>([]);
  const isFavorito = favoritos.includes(index);

  const handleFavoritoClick = useCallback(
    (index: number, isFavorito: boolean) => {
      setFavoritos((prev) => {
        if (isFavorito) {
          return prev.filter((i) => i !== index);
        } else {
          return [...prev, index];
        }
      });
    },
    []
  );

  const navigateToLista = (toPsi?: number) => {
    const query = favoritos.join(",");

    console.log("toPsi", toPsi);

    router.push(
      `/paciente/psicologos/lista?favoritos=${query}${
        toPsi !== undefined ? `&psi=${toPsi}` : ""
      }`
    );
  };

  return (
    <>
      <div className="bg-gradient-to-b from-psi-secondary to-psi-primary from-30% text-foreground p-4 rounded-lg flex flex-col h-full min-h-0">
        <div className="relative flex-none rounded-lg w-[600px] h-[400px] overflow-hidden">
          <Image
            // src={"https://picsum.photos/600/400?random=" + index}
            src={`/images/pessoa${index + 1}.jpg`}
            alt={`Foto do ${currentPsicologo.nomeCompleto}`}
            width={600}
            height={400}
            style={{ objectFit: "cover" }}
            priority
            className="flex-none rounded-lg w-[600px] h-[400px] blur-md scale-110"
          />
          <Image
            // src={"https://picsum.photos/600/400?random=" + index}
            src={`/images/pessoa${index + 1}.jpg`}
            alt={`Foto do ${currentPsicologo.nomeCompleto}`}
            width={400}
            height={400}
            style={{ objectFit: "scale-down" }}
            priority
            className="flex-none rounded-lg w-[600px] h-[400px] absolute top-0 left-0"
          />
        </div>
        <section className="border-b border-psi-primary pb-4 my-2 flex-none">
          <h1 className="text-2xl font-bold">
            {currentPsicologo.nomeCompleto} - {currentPsicologo.CRP}
          </h1>
          <div className="flex space-x-4">
            {currentPsicologo.atendePresencial && (
              <span className="flex items-center space-x-2">
                <MapPin size={18} />
                <p>{currentPsicologo.enderecoDeAtendimento}</p>
              </span>
            )}
            {currentPsicologo.atendeOnline && (
              <span className="flex items-center space-x-2">
                <PhoneCall size={18} />
                <p>Atende Online</p>
              </span>
            )}
            <span className="flex items-center space-x-2">
              <Coins size={18} />
              <p>R${currentPsicologo.valorConsulta}</p>
            </span>
          </div>
        </section>
        <section className="border-b border-psi-secondary pb-4 mb-4 min-h-0 flex-1 overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-xl font-semibold">Especialidades</h2>
              <ul className="list-disc list-inside">
                {currentPsicologo.especialidades.map((especialidade) => (
                  <li key={especialidade}>{especialidade}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Gostos pessoais</h2>
              <ul className="list-disc list-inside">
                {currentPsicologo.gostosPessoais?.map((gosto) => (
                  <li key={gosto}>{gosto}</li>
                ))}
              </ul>
            </div>
          </div>

          <p>Email: {currentPsicologo.email}</p>
          <p>Telefone: {currentPsicologo.telefone}</p>
        </section>

        <div className="flex justify-between text-foreground flex-none">
          <RoundLabeledButton
            onClick={handlePrev}
            label="Anterior"
            icon={<ChevronLeft size={24} />}
          />
          <RoundLabeledButton
            onClick={() => {
              handleFavoritoClick(index, isFavorito);
            }}
            label="Favoritar"
            icon={
              isFavorito ? (
                <Star size={24} className="text-yellow-500" fill="#eab308" />
              ) : (
                <Star size={24} />
              )
            }
          />
          <RoundLabeledButton
            onClick={() => {
              navigateToLista(index);
            }}
            label="Ver mais"
            icon={<Eye size={24} />}
          />
          <RoundLabeledButton
            onClick={() => {
              navigateToLista();
            }}
            label="Ver Todos"
            icon={<List size={24} />}
          />
          <RoundLabeledButton
            onClick={handleNext}
            label="Próximo"
            icon={<ChevronRight size={24} />}
          />
        </div>
      </div>
      {/* Imagens pré renderizadas */}
      <div className="absolute top-[500%] left-[500%]">
        {surroundingIndexes.map((i) => {
          const newSrc = `/images/pessoa${i + 1}.jpg`;
          return (
            <Image
              key={i}
              src={newSrc}
              alt={`Foto do ${psicologos[i].nomeCompleto}`}
              width={600}
              height={400}
              priority={true}
            />
          );
        })}
      </div>
    </>
  );
}

function RoundLabeledButton({
  onClick,
  label,
  icon,
}: {
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={onClick}
        className="bg-psi-secondary hover:bg-psi-secondary/70 hover:ring-2 ring-psi-secondary border-2 border-psi-primary transition-colors p-2 rounded-full"
      >
        {icon}
      </button>
      <span className="font-semibold">{label}</span>
    </div>
  );
}
