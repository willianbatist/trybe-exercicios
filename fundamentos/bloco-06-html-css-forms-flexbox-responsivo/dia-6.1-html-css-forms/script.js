const selectEstados = document.getElementById('lista-de-estados');
const estadosDoBrasil = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato G. do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio G. do Norte', 'Rio G. do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

function aparecerEstados() {
    if (selectEstados.innerText = 'null') {
        for (let index = 0; index < estadosDoBrasil.length; index += 1) {
            const criarOption = document.createElement('option');
            criarOption.className = 'estadosBr'
            selectEstados.appendChild(criarOption);
            criarOption.innerText = estadosDoBrasil[index];
        }
    }

}
aparecerEstados()

console.log()