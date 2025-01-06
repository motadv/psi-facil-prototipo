import React from "react";
import Image from "next/image";
import profilePic from "@/../public/images/generic_female.jpg";

interface MyChatMessageProps {
  message: string;
  profilePicture?: string;
  children?: React.ReactNode;
}

export default function MyChatMessage({
  profilePicture,
  message,
  children,
}: MyChatMessageProps) {
  return (
    <div className="flex gap-4 items-center justify-end w-5/6 self-end my-2">
      {/* Chat Bubble */}
      <div className="flex flex-col bg-psi-tertiary text-foreground p-4 rounded-md">
        <p>{message}</p>
        {children}
      </div>
      <div className="place-self-start rounded-full h-12 w-12 flex-shrink-0 flex-grow-0 overflow-clip bg-psi-primary text-foreground text-center">
        <Image
          src={profilePicture || profilePic}
          alt="Foto"
          height={48}
          width={48}
        />
      </div>
    </div>
  );
}
