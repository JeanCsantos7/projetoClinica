/* import { createContext, ReactNode, useState } from "react";
import PacienteDados from "../components/PacienteDados";

interface Estado {
  nome: string;
  email: string;
  CPF: JSX.Element;
}

export const ContextoDados = createContext<Estado | null>(null);

export default function ContextoFunction({ children }: { children: ReactNode }) {
  const [nome] = useState<string>('Jean Carlos');
  const [email] = useState<string>('jean.carlos87');
  const [CPF] = useState<JSX.Element>(<PacienteDados />);

  return (
    <ContextoDados.Provider value={{ nome, email, CPF }}>
      {children}
    </ContextoDados.Provider>
  );
}
 */