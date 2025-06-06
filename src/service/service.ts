import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export const cadastrarUsuario = async (
    url: string,
    dados: Object,
    setDados: Function
) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
};
{/*Adicionado method de busca por filtragem*/}
export const filtro = async (url: string, header: Object) => {
    const resposta = await api.get(url, header);
    return resposta.data;
};

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
};

export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
};

export const cadastrar = async (
    url: string,
    dados: Object,
    setDados: Function,
) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
};

export const atualizar = async (
    url: string,
    dados: Object,
    setDados: Function,
    header: Object
) => {
    const resposta = await api.put(url, dados, header);
    setDados(resposta.data);
};

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header)
}