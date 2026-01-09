let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

class Atleta {
  constructor(atleta){
    this.nome = atleta.nome
    this.notas = atleta.notas
  }
  obterNotas(){
    return this.notas = this.notas.sort((a,b) => a-b)
  }
  obterMedia(){
    let notasOrdenadas = this.obterNotas();
    let notasComputadas = notasOrdenadas.slice(1, 4);
    let soma = notasComputadas.reduce((soma, item) => soma + item, 0);
    return soma / notasComputadas.length;
  }
  exibirResultado() {
    let media = this.obterMedia(); 
    console.log(`Atleta: ${this.nome}`);
    console.log(`Notas Obtidas: ${this.notas.join(", ")}`);
    console.log(`Média Válida: ${media}`);
    console.log("");
  }
}

atletas.forEach(dadosAtleta => {
    let objetoAtleta = new Atleta(dadosAtleta);
    objetoAtleta.exibirResultado();
});
