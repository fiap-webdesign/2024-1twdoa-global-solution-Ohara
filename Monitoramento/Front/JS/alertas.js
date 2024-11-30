document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'http://localhost:8080/api/alertas'; // Substitua pela URL do back-end

    const carregarAlertas = async () => {
        try {
            const resposta = await fetch(API_URL);
            const alertas = await resposta.json();
            preencherTabela(alertas);
        } catch (erro) {
            console.error('Erro ao carregar alertas:', erro);
            mostrarErroNaTabela();
        }
    };

    const preencherTabela = (alertas) => {
        const tabela = document.getElementById('tabela-alertas');
        tabela.innerHTML = ''; // Limpar tabela

        if (alertas.length === 0) {
            tabela.innerHTML = `<tr><td colspan="3">Nenhum alerta encontrado</td></tr>`;
            return;
        }

        alertas.forEach((alerta) => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
                <td>${alerta.horario}</td>
                <td>${alerta.mensagem}</td>
                <td>${alerta.nivel}</td>
            `;
            tabela.appendChild(linha);
        });
    };

    const mostrarErroNaTabela = () => {
        const tabela = document.getElementById('tabela-alertas');
        tabela.innerHTML = `<tr><td colspan="3">Erro ao carregar alertas. Tente novamente mais tarde.</td></tr>`;
    };

    carregarAlertas();
});
