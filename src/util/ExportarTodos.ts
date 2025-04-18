const headerMap: { [key: string]: string } = {
    nome: "Nome",
    escola: "Escola",
    manequim: "Man.",

    compBustoFrente: "Busto Fr.",
    compOmbro: "Ombro",
    compAlturaTronco: "Alt Tronco",
    compBraco: "Alt Braço",
    compBusto: "Alt Busto",

    circBusto: "Circ Busto",
    circCintura: "Circ Cint.",
    circCava: "Circ Cava",
    circBiceps: "Circ Bíceps",
    circPunhoFechado: "Circ PunhoF",
    circPunhoAbertura: "Circ PunhoA",
    circPescoco: "Circ Pescoço",
    circCinturaMedia: "Cint Média",
    circCinturaBaixa: "Cint Baixa",

    compMeioCoxa: "Comp Coxa",
    compJoelho: "Comp Joelho",
    compPanturrilha: "Comp Pantu",
    compTotalPerna: "Comp Perna",

    circCoxa: "Circ Coxa",
    circJoelho: "Circ Joelho",
    circPanturrilha: "Circ Pantu",
    circTornozelo: "Circ Tornozelo",
    gancho: "Gancho",

    comentario: "Comentário",
};

export function generatePrintHTML(usuarios: any[]): string {
    if (usuarios.length === 0) return '<p>Sem dados para exibir.</p>';

    const camposPermitidos = Object.keys(headerMap);
    const headers = Object.keys(usuarios[0]).filter((key) => camposPermitidos.includes(key));
    const linhas = usuarios.map((usuario) => {
        const valores = headers.map((chave) => `<td>${usuario[chave]}</td>`).join('');
        return `<tr>${valores}</tr>`;
    }).join('');

    const tabela = `
        <h2>Relatório de Medidas</h2>
        <table>
            <thead>
                <tr>${headers.map(h => `<th>${headerMap[h] || h}</th>`).join('')}</tr>
            </thead>
            <tbody>${linhas}</tbody>
        </table>
    `;

    return tabela;
}
