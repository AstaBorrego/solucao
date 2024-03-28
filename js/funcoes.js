
// funcoes.js
var squad = [];

// Função para gravar uma nova solução
function funcGravar() {
    let Squad = document.getElementById('txtSquad').value;
    let Area = document.getElementById('txtSolucao').value;
    
    if (Squad === "") {
        alert('Nome da Squad é obrigatório');
        document.getElementById('txtSquad').focus()
        return;
    } else if (Area === "") {
        alert('Solução é obrigatório');
        document.getElementById('txtSolucao').focus()
        return;
    } else {
        let arr = JSON.parse(localStorage.getItem('solucao') || '[]');
        arr.push({ 'Squad': Squad, 'Resposta': Area, 'Voto': 0 });
        localStorage.setItem('solucao', JSON.stringify(arr));
        alert('😁 Gravação Sucesso!!!');
       document.getElementById('txtSquad').value="";
       document.getElementById('txtSolucao').value="";
       document.getElementById('txtSquad').focus()
    }
}

// Função para consultar e mostrar as soluções gravadas
function funcConsultar() {
    let tabelaDados = document.getElementById("dadosTabela");
    let bancoDados = JSON.parse(localStorage.getItem('solucao') || '[]');

    let elemento = "";

    bancoDados.forEach(registro => {
        elemento += `<tr>
                        <td>${registro.Squad}</td>
                        <td>${registro.Resposta}</td>
                        <td>${registro.Voto}</td>
                        <td>
                            <button id="btnVotar" onclick="funVoto('${registro.Squad}')">Votar</button>
                        </td>
                    </tr>`;
    });

    tabelaDados.innerHTML = elemento;
}

// Função para adicionar um voto
function funVoto(squadVotado) {
    let arr = JSON.parse(localStorage.getItem('solucao') || '[]');

    const itemIndex = arr.findIndex(item => item.Squad === squadVotado);
    if (itemIndex > -1) {
        arr[itemIndex].Voto += 1;
    }

    localStorage.setItem('solucao', JSON.stringify(arr));
    funcConsultar(); // Atualiza a visualização
    alert('Votação registrada com sucesso!!! 😁')
}

//window.funVoto = funVoto; // Torna a função acessível globalmente
window.addEventListener("DOMContentLoaded",function(){
    funcConsultar();
})
