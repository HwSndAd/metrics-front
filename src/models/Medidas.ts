export default interface Medidas {
    id?: number;
    dataAtual?: string; // ou undefined
    token?: string; // importante para passar no header
    nome: string;

    evento: string; //add

    altura: number; //Adicionado
    status: string;

    escola: string;
    manequim?: string;
    compBustoFrente?: number;
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
    circQuadril?: number; //Adicionado
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
}
