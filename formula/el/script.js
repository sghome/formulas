var sujetos = [
  "El",



];
var verbos = [
  "Ha Cantado",
  "Ha Comido",
  "Ha Vivido",
  "Ha Caminado",
  "Ha Corrido",
  "Ha Cocinado",
  "Ha Tomado",
  "Ha Llamado",
  "Ha Actuado"
];
var complementos = [
  "2 veces",
  "1 hora",
  "por primera vez",
  "en el hotel",
  "en la casa",
  "en el apartamento",
  "3 dias"
];

var sujetoElements = document.querySelectorAll('.sujeto');
var verboElements = document.querySelectorAll('.verbo');
var complementoElements = document.querySelectorAll('.complemento');

function getSujeto(){
  return sujetos[Math.floor(Math.random() * sujetos.length)];
};
function getVerbo(){
  return verbos[Math.floor(Math.random() * verbos.length)];
};
function getComplemento(){
  return complementos[Math.floor(Math.random() * complementos.length)];
};

function phraseRandomizer(getPhraseFunctions, elementsArray){
  for (var count = 0; count < elementsArray.length; count += 1){
    var randomPhrase = getPhraseFunctions();
    elementsArray[count].innerHTML = randomPhrase;
  };
};

var goBtn = document.getElementById('go');

function goBtnClick(event){
  event.preventDefault();
  phraseRandomizer(getSujeto, sujetoElements);
  phraseRandomizer(getVerbo, verboElements);
  phraseRandomizer(getComplemento, complementoElements);
}

goBtn.addEventListener('click', goBtnClick);
