export default interface Medidas {
    id?: number;
    nome: string;
    escola: string;
    status: string;
    manequim?: string;
    compBustoFrente?: number;
    dataAtual?: string; // ou undefined
    compOmbro?: number;
    compAlturaTronco?: number;
    compBraco?: number;
    compBusto?: number;
    circBusto?: number;
    circCintura?: number;
    circCava?: number;
    circBiceps?: number;
    circPunhoFechado?: number;
    circPunhoAbertura?: number;
    circPescoco?: number;
    circCinturaMedia?: number;
    circCinturaBaixa?: number;
    compMeioCoxa?: number;
    compJoelho?: number;
    compPanturrilha?: number;
    compTotalPerna?: number;
    circCoxa?: number;
    circJoelho?: number;
    circPanturrilha?: number;
    circTornozelo?: number;
    gancho?: number;
    comentario?: string;
    token?: string; // importante para passar no header
}
