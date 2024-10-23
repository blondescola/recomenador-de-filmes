// Listas de Filmes

// 1- Interestelar, 12 anos, Sci-Fi, Aventura
// 2- Invocação do Mal, 14 anos, Terror
// 3- Vidas passadas, 14 anos, Romance, Drama
// 4- O rei leão, Livre, Animação, Drama
// 5- O Mágico de Oz, Livre, Animação
// 6- Jurassic Park, 12 anos, Aventura, Sci-Fi
// 7- Matrix, 14 anos, Ação, Sci-Fi
// 8- A Barraca do Beijo, 12 anos, Romance/Comédia
// 9- Quatro Vidas de um Cachorro, 12 anos, Comédia
// 10- Turma da Mônica em Cinegibi: O Filme, Livre, Comédia

let campoIdade;
let campoDrama;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoDrama = createCheckbox("Gosta de drama?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("rgb(187,245,245)");
  let idade = campoIdade.value();
  let gostaDeDrama = campoDrama.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeDrama, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeDrama, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      if (idade >= 12) {
        if(gostaDeDrama || gostaDeAventura) {
          return "Homem aranha: no aranhaverso";          
        } else{
         return "Ladrões de bicicleta";
        }
      } else {
        if (gostaDeDrama) {
          return "As aventuras de pi";
        } else {
          return "Depois da chuva";
        }
      }
    }
  } else {
    if (gostaDeDrama) {
      return "A viagem de chihiro";
    } else {
      return "O feitiço do tempo";
    }
  }
}
