//**Seção em andamento**
/*AULA -  Revisando Objetos
// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  
    Object.freeze(this); //Trava objeto
  }
  // {} <- this
  const p1 = new Pessoa('Luiz', 'Miranda');//Construtora
  const p2 = new Pessoa('Maria', 'Miranda');//Costrutora
  
  console.log(p1);
  console.log(p2); */

/*AULA - Object.defineProperty() e Object.defineProperties()
// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
  
    Object.defineProperty(this, 'estoque', {
      enumerable: true, // mostra a chave
      value: estoque, // valor
      writable: true, // pode alterar
      configurable: true // configurável
    });
  }
  
  const p1 = new Produto('Camiseta', 20, 3);
  console.log(Object.keys(p1));
  
  for(let chave in p1) {
    console.log(chave);
  } */
