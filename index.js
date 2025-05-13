const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  let divContainer = document.getElementById("container");

  let bicho = document.createElement("div");
  bicho.innerHTML = "color nº 1";

  let lista = `<div class="d-flex">`;

  for (let i = 1; i <= 10; i++) {
    let random1 = Math.floor(Math.random() * 256);
    let random2 = Math.floor(Math.random() * 256);
    let random3 = Math.floor(Math.random() * 256);
    let randomColor = `${random1}, ${random2}, ${random3}`;

    lista += `<div style="background-color: rgb(${randomColor}) " class="bicho"> color nº ${i}</div>`;
  }

  lista += `</div>`;

  divContainer.innerHTML = lista;
});
