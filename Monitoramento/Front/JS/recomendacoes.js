document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'http://localhost:8080/api/energia/tempo-real'; // Substitua pela URL real da API

    const carregarRecomendacoes = async () => {
        try {
            const resposta = await fetch(API_URL);
            const dados = await resposta.json();
            preencherTabela(dados);
        } catch (erro) {
            console.error('Erro ao carregar dados:', erro);
            mostrarErroNaTabela();
        }
    };

    const preencherTabela = (dados) => {
        const tabela = document.getElementById('tabela-recomendacoes');
        tabela.innerHTML = ''; // Limpar tabela

        if (dados.length === 0) {
            tabela.innerHTML = `<tr><td colspan="3">Nenhuma recomendação disponível</td></tr>`;
            return;
        }

        dados.forEach((item) => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
                <td>${item.horario}</td>
                <td>${item.consumo.toFixed(2)} kWh</td>
                <td>${item.recomendacao}</td>
            `;
            tabela.appendChild(linha);
        });
    };

    const mostrarErroNaTabela = () => {
        const tabela = document.getElementById('tabela-recomendacoes');
        tabela.innerHTML = `<tr><td colspan="3">Erro ao carregar dados. Tente novamente mais tarde.</td></tr>`;
    };

    carregarRecomendacoes();
});
