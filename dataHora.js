// dataHora.js
const datahora = {
    dataHoraAtual: function() {
        const now = new Date();
        const data = now.toLocaleDateString('pt-BR');  // Formato dd/mm/aaaa
        const hora = now.toLocaleTimeString('pt-BR');  // Formato hh:mm:ss
        return `${data} - ${hora}`;
    }
};

// Exemplo de como utilizar a função
console.log(`Data e Hora Atual: ${datahora.dataHoraAtual()}`);

export default datahora;
