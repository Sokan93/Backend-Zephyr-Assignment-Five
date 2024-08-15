const ul = document.getElementById("list");
const btn = document.getElementById("btn");

function addNewListItem(){
  btn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "Tomato"
    ul.appendChild(li);
  })
}
addNewListItem();