export interface Agendamento {
    id: number;
    estado: string;
    especialidade: string;
    unidade: string;
    data: string;
    horario: string;
    idcliente: number;
    
    create_at: string;
    update_at: string;
}