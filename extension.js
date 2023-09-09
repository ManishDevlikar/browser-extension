let input = document.querySelector("input");
let add = document.querySelector("#add");
let del = document.querySelector("#delete");
let ul = document.querySelector("ul");
let ctab = document.querySelector("#ctab");
let local = JSON.parse(localStorage.getItem("storage"));

let = store = [];

if (local) {
  store = local;
  render();
}

add.addEventListener("click", () => {
  if (input.value !== "") {
    store.push(input.value);
    localStorage.setItem("storage", JSON.stringify(store));
    input.value = "";
    render();
  }
});
del.addEventListener("click", () => {
  localStorage.clear();
  store = [];
  render();
});
function render() {
  ul.innerHTML = "";
  for (let i = 0; i < store.length; i++) {
    ul.innerHTML += `<li><a href='${store[i]}' target='_blank'>${store[i]}</a></li>`;
  }
}
