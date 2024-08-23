const datahora = {
    dataHoraAtual: function() {
        const now = new Date();
        const dia = String(now.getDate()).padStart(2, '0');
        const mes = String(now.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
        const ano = now.getFullYear();
        const horas = String(now.getHours()).padStart(2, '0');
        const minutos = String(now.getMinutes()).padStart(2, '0');
        const segundos = String(now.getSeconds()).padStart(2, '0');

        // Retorna data no formato dd/mm/aaaa e hora no formato hh:mm:ss
        return `${dia}/${mes}/${ano} - ${horas}:${minutos}:${segundos}`;
    }
};

// Exemplo de como utilizar a função
console.log(`Data e Hora Atual: ${datahora.dataHoraAtual()}`);

export default datahora;
