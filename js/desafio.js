//*---------------------------------------------------------------------------------------------//
//*importando função
//*---------------------------------------------------------------------------------------------//
//import { funcGravar } from "./funcoes.js";

  //criando amatriz para armazenar os dados

  let solucao = [];
  //Criando os elementos da página solucao.html
  //---------------------------------------------------------------//
  //Divs
  //--------------------------------------------------------------//
  let divDesafio = document.createElement("div");
  let divFormulario = document.createElement("div");
  let divTitForm = document.createElement("div");
  let divTituloPri= document.createElement("div");

  //Elementos diversos
  let imgDesafio = document.createElement('img');

  let titulo = document.createElement('h1');
  let tituloForm = document.createElement('h1');

  //Criando os elementos do form

  let lbl1 = document.createElement('label');
  let lbl2 = document.createElement('label');
  let lbl3 = document.createElement('label');
  let lbl4 = document.createElement('label');
  let lbl5 = document.createElement('label');

  let textoSquad = document.createElement('input');
  let  textoSolucao = document.createElement('textarea');


  //criando os elementos do formulário
  let lblSquad = document.createElement("div");
  let lblSolucao = document.createElement("div");

  //Criando as divs do formulário
  let div1_form= document.createElement("div");
  let div1_text = document.createElement('div');
  let div2_form= document.createElement("div");
  let div2_textArea = document.createElement('div')
  let div3_form= document.createElement("div");
  let div4_form= document.createElement("div");


  let botaoEnviar = document.createElement('button')
  let botaoVer = document.createElement('button')

  //adicionando o id no elemento
  divDesafio.id = 'desafio';
  imgDesafio.id = 'desafioImg';
  divFormulario.id = 'container';
  divTitForm.id = 'titForm';
  divTituloPri.id = 'titPrin';
  botaoVer.id = 'botaoVer';
  botaoEnviar.id = 'botaoEnviar';
  lbl1.id = 'squad';
  lbl2.id = 'solucao';
  textoSquad.id = 'txtSquad';
  textoSolucao.id = 'txtSolucao';


  //divs do form
  div1_form.id = 'squad';
  div2_form.id = 'solucao';
  div3_form.id = 'botao';
  div4_form.id = 'botao';
  div1_text.id = 'titulo1';


  //adicionando classe

  divDesafio.classList.add('desafio');
  imgDesafio.classList.add('imgDesafio'); 
  divTituloPri.classList.add('titPrin');

  divFormulario.classList.add('formDesafio');

  div1_form.classList.add('lbl');
  div2_form.classList.add('lbl');
  div3_form.classList.add('lblBotao');
  div4_form.classList.add('lblBotao');
  div1_text.classList.add('lblSquad');
  botaoEnviar.classList.add('botao');
  botaoVer.classList.add('botao');


  //adiconando atributo 
  imgDesafio.setAttribute('src','./img/'+'desafio.jpg')

  //label
  lbl1.setAttribute('for','squad');
  lbl2.setAttribute('for','solucao');
  lbl3.setAttribute('for','historia');

  botaoEnviar.setAttribute('type','button');
  botaoVer.setAttribute('type','button');

  textoSquad.setAttribute('type','text')
  textoSolucao.setAttribute('maxlength', '1000');


  //inserindo texto
  titulo.innerHTML = "Desafio";
  tituloForm.innerHTML = "Formulário Solução";

  lbl1.innerHTML = 'SQUAD';
  lbl2.innerHTML = 'SOLUÇÃO';
  botaoEnviar.innerHTML = 'Gravar'
  botaoVer.innerHTML = 'Ver Solução'

  //adiconando evento no botão
  //inserindo no elemento pai

  document.body.appendChild(divTituloPri);
  divTituloPri.appendChild(titulo)
  document.body.append(divDesafio);
  divDesafio.appendChild(imgDesafio);

  //criando o formmulário
  document.body.append(divFormulario);
  divFormulario.appendChild(divTitForm);
  divTitForm.appendChild(tituloForm);
  //Adicionnado as divs do formulário
  divFormulario.appendChild(div1_form);
  divFormulario.appendChild(div2_form);
  divFormulario.appendChild(div3_form);
  divFormulario.appendChild(div4_form);


  //Montando as divs do formulário
  div1_form.appendChild(div1_text);
  div1_text.appendChild(lbl1);
  div1_form.appendChild(textoSquad);

  div2_form.appendChild(div2_textArea);
  div2_textArea.appendChild(lbl2);

  div2_form.appendChild(textoSolucao);
  div3_form.appendChild(botaoEnviar);
  div4_form.appendChild(botaoVer);

  //funçoes 
  //const botaoEnviar = document.querySelector("#botaoEnviar");
                      
  //botaoEnviar.onclick(funcGravar)
  document.getElementById("botaoEnviar").onclick = function(e) {
      //Aqui estamos usando método .preventDefault paras que a página não atualize
      e.preventDefault()
      funcGravar();
  };

  //Abrir tela de solução
  document.getElementById("botaoVer").onclick = function(e) {
      //Aqui estamos usando método .preventDefault para que a página não atualize
      e.preventDefault()
     window.location.href = 'resultados.html';
      //window.location.href = 'file:///D:/_Aulas%20Tecnico/PWFE/Aula%20JavaScript/2_Semestre_2/votacao_asta_sesi%20-%20Copia/resultados.html'
  };


//-------------------------------------------------------------------------------------//
// criando elementos da página resultados
//------------------------------------------------------------------------------------//
let divSolucao = document.createElement('div');


//-------------------------------------------------------------------------------------//
// fim dos elementos da página resultado
//------------------------------------------------------------------------------------/

//Criando as funções

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
