"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MainButton from "../components/MainButton";
import { Eye, EyeClosed } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  async function handleLogin() {
    // Mockado sem corpo e backend para prototiopação
    await fetch("/api/login", {
      method: "POST",
    });

    if (username === "psicologo") {
      router.push("/profissional");
      return;
    } else {
      router.push("/paciente/questionario");
    }
  }

  return (
    <div className="h-full flex flex-col justify-center items-center bg-transparent">
      <form className="flex flex-col gap-4 w-10/12 md:w-6/12 lg:w-4/12 mx-auto my-auto">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-center">
            Bem vindo ao Psi Fácil!
          </h1>
          <p className="text-center">Por favor entre com seus dados</p>
        </div>
        <label htmlFor="username_input">Nome de usuário</label>
        <input
          id="username_input"
          type="text"
          value={username}
          className="text-black p-1 rounded-sm"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password_input" className="">
          Senha
        </label>
        <div className="relative">
          <input
            id="password_input"
            type={showPassword ? "text" : "password"}
            value={password}
            className="text-black p-1 rounded-sm w-full"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 px-3 py-1"
            name="toggle_password_visibility"
            title="Mostrar senha"
          >
            {showPassword ? (
              <EyeClosed
                size={24}
                onClick={() => setShowPassword(false)}
                className="text-psi-primary"
              />
            ) : (
              <Eye
                size={24}
                onClick={() => setShowPassword(true)}
                className="text-psi-primary"
              />
            )}
          </button>
        </div>

        <Link href={"#"} className="hover:underline">
          {" "}
          Esqueceu a senha?{" "}
        </Link>

        <div className="flex gap-4 w-full">
          <MainButton onClick={handleLogin} className="flex-1">
            {" "}
            Login{" "}
          </MainButton>
          <MainButton
            onClick={() => router.push("/register")}
            className="bg-psi-tertiary flex-1"
          >
            {" "}
            Cadastre-se{" "}
          </MainButton>
        </div>
      </form>
    </div>
  );
}
