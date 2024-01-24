const formPesquisa = document.querySelector('form');

//O formulário tem um evento onsubmit, que recebe uma função, neste caso uma arrow function.
formPesquisa.onsubmit = (ev) => {
  //Deixa de executar o comportamento padrão do evento.
  ev.preventDefault();
  
  //target é o form e dentro do form temos um campo com name = pesquisa
  const pesquisa = ev.target.pesquisa.value;
  const apiKey = "";
  
  //Realiza a validação do campo.
  if(pesquisa ==""){
    alert("Preencha o campo!");
    //caso não tenha informação ele não prossegue
    return;
  }

  //result é um parâmetro de uma função e o retorno dessa função é a conversão do result para json
  fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${pesquisa}`).then(result => result.json()).then(json => carregaLista(json));
}

const carregaLista = (json) => {
  const lista = document.querySelector("div.lista");
  lista.innerHTML = "";

  json.Search.forEach(element => {
    console.log(element);

    let item = document.createElement("div");
    item.classList.add("item");

    item.innerHTML = `<img src="${element.Poster}"/><h2>${element.Title}</h2>`;

    lista.appendChild(item);
  })
}