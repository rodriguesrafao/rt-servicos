import { db, getQueryList } from "./firebase";
import { collection, doc, endAt, getDocs, orderBy, query, runTransaction, startAt, where } from "firebase/firestore";
import { primeiraMaiuscula, verificarTipoEntrada } from "utils/string-utils";

export async function obterTodosClientes (){
    const lista = [];
    return lista;
}

export async function obterClienteByNomeOuCPFCNPJ (termo){
    return [];
}


export async function gravarCliente(dados) {
    try {
        return Promise.resolve('Dados gravados com sucesso');
    } catch (error) {
        return Promise.reject(error);
    }
}