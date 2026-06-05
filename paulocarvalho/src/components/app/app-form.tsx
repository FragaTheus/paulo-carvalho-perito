"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function AppForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! },
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <Input
        type="text"
        name="from_name"
        placeholder="Nome completo"
        required
      />
      <Input
        type="email"
        name="from_email"
        placeholder="Email corporativo"
        required
      />
      <Input
        type="text"
        name="subject"
        placeholder="Assunto"
        className="md:col-span-2"
        required
      />
      <Input
        type="text"
        name="message"
        placeholder="Mensagem"
        className="md:col-span-2"
        required
      />
      <Button
        type="submit"
        disabled={status === "sending"}
        className="bg-primary text-primary-foreground hover:opacity-90 active:bg-primary active:text-primary-foreground active:opacity-80"
      >
        {status === "sending" ? "Enviando…" : "Enviar"}
      </Button>
      {status === "success" && (
        <p className="md:col-span-2 text-sm text-green-400">
          Mensagem enviada com sucesso! Em breve entraremos em contato.
        </p>
      )}
      {status === "error" && (
        <p className="md:col-span-2 text-sm text-red-400">
          Erro ao enviar. Por favor, tente novamente ou contate via WhatsApp.
        </p>
      )}
    </form>
  );
}
