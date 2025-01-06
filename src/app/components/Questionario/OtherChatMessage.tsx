import React from "react";

interface OtherChatMessageProps {
  message: string;
  children?: React.ReactNode;
  profilePicture?: string;
  hideProfilePicture?: boolean;
}

export default function OtherChatMessage({
  message,
  children,
  hideProfilePicture = false,
}: OtherChatMessageProps) {
  return (
    <div className="flex gap-4 items-center w-5/6">
      {!hideProfilePicture && (
        <div className="place-self-start h-12 w-12 rounded-full bg-psi-primary text-foreground font-bold text-sm flex flex-col items-center justify-center flex-shrink-0 flex-grow-0">
          <p>Ψ</p>
          <p>Fácil</p>
        </div>
      )}

      {/* Chat Bubble */}
      <div
        className={`flex flex-col bg-psi-secondary text-foreground p-4 rounded-md ${
          hideProfilePicture && "ms-16"
        }`}
      >
        <p>{message}</p>
        {children}
      </div>
    </div>
  );
}
