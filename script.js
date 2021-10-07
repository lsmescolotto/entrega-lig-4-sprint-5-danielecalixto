//DANI
let tabela = [[" ", " ", " ", " ", " ", " "],
              [" ", " ", " ", " ", " ", " "],
              [" ", " ", " ", " ", " ", " "],
              [" ", " ", " ", " ", " ", " "],
              [" ", " ", " ", " ", " ", " "],
              [" ", " ", " ", " ", " ", " "],
              [" ", " ", " ", " ", " ", " "]];

const criarTabela = () => {
    const main = document.querySelector("main");
    const jogo = document.createElement("section");
    jogo.setAttribute("id", "jogo");
    main.appendChild(jogo);

    for(let i=0; i<7; i++) {
        const colunas = document.createElement("div");
        colunas.classList.add(`coluna${i}`);
        jogo.appendChild(colunas);
        
        // for(let j=0; j<6; j++) {
        // const celulas = document.createElement("div");
        // celulas.classList.add(`celula${j}`);
        // colunas.appendChild(celulas);
        //  } 
    }   
}
criarTabela();

//DANI VITORIA

function vitoria(jog) {
    let resultado = false;
    
    for (let i=0; i<7; i++) {
        for (let j=0; j<3; j++) {
            if (tabela[i][j]==jog && tabela[i][j+1]==jog && tabela[i][j+2]==jog && tabela[i][j+3]==jog) {
                //VITORIA VERTICAL
                resultado = true;
            }
        }
    }
    if (resultado == false) {
        for (let i=0; i<4; i++) {
            for (let j=0; j<6; j++) {
                if (tabela[i][j]==jog && tabela[i+1][j]==jog && tabela[i+2][j]==jog && tabela[i+3][j]==jog) {
                    //VITORIA HORIZONTAL
                    resultado = true;
                }
            }
        }
        if (resultado == false) {
            for (let i=0; i<4; i++) {
                for (let j=0; j<3; j++) {
                    if (tabela[i][j]==jog && tabela[i+1][j+1]==jog && tabela[i+2][j+2]==jog && tabela[i+3][j+3]==jog) {
                        //VITORIA DIAGONAL
                        resultado = true;
                    }
                }
            }
            if (resultado == false) {
                for (let i=6; i>2; i--) {
                    for (let j=0; j<3; j++) {
                        if (tabela[i][j]==jog && tabela[i-1][j+1]==jog && tabela[i-2][j+2]==jog && tabela[i-3][j+3]==jog) {
                            //VITORIA DIAGONAL INVERSA
                            resultado = true;
                        }
                    }
                }
            }
        }
    }
    console.log(resultado);
    return resultado;
}

function vencedor(jogador) {
    const section = document.querySelector('.secVitoria')
    const msg = document.createElement('p')
    if(vitoria(jogador) === true){
        msg.innerText = `Parabéns, ${jogador}. Você venceu!`
        section.appendChild(msg);
    };
    //Faz alguma coisa com o vencedor
}

//GABRIEL
/*
const criarTabela = () => {
    const body = document.querySelector('body')
    const tabela = document.createElement('div')
    body.appendChild(tabela)
        .setAttribute('id', 'tabela')
         
    for(let i = 0; i < 7; i++){
        const colunas = document.createElement('div')
        colunas.classList.add(`coluna${i+1}`)
                
        for(let j = 0; j < 6; j++){
            const linhas = document.createElement('div')
                
            colunas.appendChild(linhas)   
                .classList.add('linha') 
        }   tabela.appendChild(colunas)
                //.classList.add('linha')
    }   
}
criarTabela()
*/


//LUIZA
 const coluna0 = document.querySelector(".coluna0");
 const coluna1 = document.querySelector(".coluna1");
 const coluna2 = document.querySelector(".coluna2");
 const coluna3 = document.querySelector(".coluna3");
 const coluna4 = document.querySelector(".coluna4");
 const coluna5 = document.querySelector(".coluna5");
 const coluna6 = document.querySelector(".coluna6");

let indiceColuna = 0;
let indiceLinha = 0;
let indiceLinha0 = 0;
let indiceLinha1 = 0;
let indiceLinha2 = 0;
let indiceLinha3 = 0;
let indiceLinha4 = 0;
let indiceLinha5 = 0;
let indiceLinha6 = 0;
let conteCliques = 0;
let classe = "";

function contarCliques() {
    conteCliques++;
    if (conteCliques%2==0 ) {
        jogador = "Y";
        classe = ".discoJogadorY";
    } else {
        jogador = "X";
        classe = ".discoJogadorX";
    }
}

let jogador = "";
const criarDiscos = (evt) => {    
    contarCliques();
    tabela[indiceColuna][indiceLinha] = jogador;
    console.log(tabela);
    
    console.log(evt.currentTarget)
    const discoJogador1 = document.createElement("div");
    discoJogador1.classList.add("discoJogador1")

    // discoJogador.classList.add(classe);

    if (evt.currentTarget.childElementCount >=0 && evt.currentTarget.childElementCount <6) {
        evt.currentTarget.appendChild(discoJogador1);
    }
    vencedor(jogador);
 }

 coluna0.addEventListener('click', function(){
    indiceColuna = 0;
    indiceLinha0++;
    indiceLinha = indiceLinha0-1;
 });
coluna0.addEventListener('click', criarDiscos);

coluna1.addEventListener('click', function(){
    indiceColuna = 1;
    indiceLinha1++;
    indiceLinha = indiceLinha1-1;
 });
 coluna1.addEventListener('click', criarDiscos);

 coluna2.addEventListener('click', function(){
    indiceColuna = 2;
    indiceLinha2++;
    indiceLinha = indiceLinha2-1;
 });
 coluna2.addEventListener('click', criarDiscos);

 coluna3.addEventListener('click', function(){
    indiceColuna = 3;
    indiceLinha3++;
    indiceLinha = indiceLinha3-1;
 });
 coluna3.addEventListener('click', criarDiscos);

 coluna4.addEventListener('click', function(){
    indiceColuna = 4;
    indiceLinha4++;
    indiceLinha = indiceLinha4-1;
 });
 coluna4.addEventListener('click', criarDiscos);

 coluna5.addEventListener('click', function(){
    indiceColuna = 5;
    indiceLinha5++;
    indiceLinha = indiceLinha5-1;
 });
 coluna5.addEventListener('click', criarDiscos);

 coluna6.addEventListener('click', function(){
    indiceColuna = 6;
    indiceLinha6++;
    indiceLinha = indiceLinha6-1;
 });
 coluna6.addEventListener('click', criarDiscos);



 