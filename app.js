function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  const section = document.getElementById("resultados-pesquisa");

  // Obtém o termo de pesquisa inserido pelo usuário
  const campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Verifica se a pesquisa está vazia
  if (campoPesquisa === "") {
    section.innerHTML = "<p class='meuparagrafo'>Busca vazia.</p>";
    return;
  }

  // Normaliza o termo de pesquisa para minúsculas
  const termoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string para armazenar os resultados
  let resultados = "";

  // Itera sobre cada item a ser pesquisado
  for (const dado of dados) {
    const titulo = dado.titulo.toLowerCase();
    const descricao = dado.descricao.toLowerCase();
    const tags = dado.tags.toLowerCase();

    // Verifica se o termo de pesquisa está presente
    if (titulo.includes(termoPesquisa) || descricao.includes(termoPesquisa) || tags.includes(termoPesquisa)) {
      // Adiciona o item aos resultados
      resultados += `
        <div class="item-resultado">
          <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  // Exibe os resultados ou uma mensagem de "não encontrado"
  section.innerHTML = resultados || "<p class='meuparagrafo'>Sem resultado para sua busca..</p>";
}








