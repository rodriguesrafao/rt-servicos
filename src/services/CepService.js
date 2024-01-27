// Importe a biblioteca 'axios' para fazer requisições HTTP
import axios from 'axios';

// Função para buscar dados do CEP
export async function buscarDadosCEP(cep) {
  try {
    // Realize uma requisição GET para a API do ViaCEP
    const response = await axios.get(`https://api.postmon.com.br/v1/cep/${cep}`);

    // Verifique se a resposta foi bem-sucedida e se contém os dados esperados
    if (response.status === 200 && response.data.cep) {
      return response.data;
    } else {
      throw new Error('CEP não encontrado');
    }
  } catch (error) {
    console.error('Erro ao buscar dados do CEP:', error);
    throw new Error('Erro ao buscar dados do CEP');
  }
}