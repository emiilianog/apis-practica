function mostrarResultados(results) {
  //   console.log(results);
  const contenedor = document.querySelector(".products__content");
  const template = document.querySelector("#product__result__template");

  for (let r of results) {
    const titleEl = template.content.querySelector(".product__name");
    titleEl.textContent = r.title;
    const priceEl = template.content.querySelector(".product__price");
    priceEl.textContent = r.price;

    const clone = document.importNode(template.content, true);
    contenedor.appendChild(clone);
  }
}

function main() {
  const formEl = document.querySelector(".search_form");
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const palabraABuscar = e.target.buscado.value;
    // console.log(palabraABuscar);

    fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + palabraABuscar)
      .then((response) => response.json())
      .then((data) => mostrarResultados(data.results));
  });

  //   mostrarResultados([1, 2, 3, 4]);
}

main();
