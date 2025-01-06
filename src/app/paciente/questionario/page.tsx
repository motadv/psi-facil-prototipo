import React from "react";
import OtherChatMessage from "../../components/Questionario/OtherChatMessage";
import MyChatMessage from "../../components/Questionario/MyChatMessage";
import { SendHorizonal } from "lucide-react";
import Link from "next/link";

export default function QuestionarioPage() {
  return (
    <div className="flex flex-col h-full">
      <h1
        className="
        text-2xl
        font-bold
        text-center
        mb-4
        flex-none
        text-psi-primary
      "
      >
        Questionário de Preferências
      </h1>
      <div className="flex flex-col px-8 gap-y-1 flex-1 min-h-0 overflow-y-auto">
        <OtherChatMessage message="Olá! Tudo bem? Posso te fazer algumas perguntas para conhecer suas preferências? Se não quiser responder algo, é só dizer que prefere não responder, ok?" />
        <OtherChatMessage
          hideProfilePicture
          message="Você prefere atendimento online ou presencial?"
        />
        <MyChatMessage message="Acho mais prático online, mas às vezes gosto de sair de casa. No momento, prefiro online." />
        <OtherChatMessage message="Entendi. Então online. E sobre o profissional, prefere alguém com valores e vivências parecidas ou que siga uma abordagem específica, tipo TCC ou psicanálise?" />
        <MyChatMessage message="Prefiro alguém com valores parecidos, mais acolhedor. Quero alguém com empatia." />
        <OtherChatMessage message="Ótimo! Então você busca afinidade de valores. Se quiser, pode falar sobre seus gostos, vivências ou até etnia e classe social. Tudo opcional. Isso ajuda a encontrar alguém que combine contigo." />
        <OtherChatMessage
          hideProfilePicture
          message="Tem algum hobbie ou interesse importante pra você? Se quiser pular, sem problemas!"
        />
        <MyChatMessage message="Gosto muito de fotografia e de fazer trilhas ao ar livre." />
        <OtherChatMessage message="Legal! E você tem algum horário preferido para suas sessões? Se não quiser responder agora, tudo bem." />
        <MyChatMessage message="Prefiro dias de semana à noite, depois do trabalho." />
        <OtherChatMessage message="Perfeito! Obrigado por compartilhar suas preferências. Se precisar de algo mais, é só me falar!" />
      </div>

      {/* Text Input */}
      <div className="flex gap-2 w-11/12 mx-auto mt-4">
        <div
          className="
        bg-foreground text-black flex 
        flex-1 min-w-0
        border-2 border-psi-primary rounded-full px-4 
        "
        >
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            className="
              focus:outline-none
              py-2
              w-full
              min-w-0
              text-gray-500
              whitespace-nowrap overflow-clip text-ellipsis
              bg-transparent
            "
            disabled
          />
          <button type="button">
            <SendHorizonal className="h-6 w-6 text-psi-primary hover:text-psi-primary/50" />
          </button>
        </div>
        <Link
          href="/paciente/psicologos"
          className="bg-psi-primary hover:bg-psi-secondary transition-colors
           text-foreground flex items-center justify-center whitespace-nowrap
           rounded-full px-4 py-2 flex-none
           hover:ring-2 ring-offset-4 ring-psi-secondary"
        >
          Encontrar Psicólogos
        </Link>
      </div>
    </div>
  );
}
