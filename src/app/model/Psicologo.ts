export interface Psicologo {
    nomeCompleto: string;
    email: string;
    telefone: string;
    atendePresencial: boolean;
    atendeOnline: boolean;
    enderecoDeAtendimento?: string;
    gostosPessoais?: string[];
    etnia?: string;
    genero: string;
    CRP: string;
    valorConsulta: number;
    especialidades: string[];
    foto: string;
    horarios: string[];
  }
  