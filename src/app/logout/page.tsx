"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    async function doLogout() {
      // Chama a rota de logout, que remove o cookie "loggedIn".
      await fetch("/api/logout", { method: "POST" });
      // Redirecionar para a Home
      router.push("/");
    }
    doLogout();
  }, [router]);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <p>Fazendo logout...</p>
    </div>
  );
}
