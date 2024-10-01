const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragStart);
item.addEventListener("dragend", dragEnd);

placeholders.forEach((placeholder) => {
  placeholder.addEventListener('dragover', dragOver);
  placeholder.addEventListener('dragenter', dragEnter);
  placeholder.addEventListener('dragleave', dragLeave);
  placeholder.addEventListener('drop', dragDrop);
});

// for (placeholder of placeholders) {
//   placeholder.addEventListener('dragover', dragOver);
//   placeholder.addEventListener('dragenter', dragEnter);
//   placeholder.addEventListener('dragleave', dragLeave);
//   placeholder.addEventListener('drop', dragDrop);
// }


function dragStart(event) {
  event.target.classList.add("hold")
  setTimeout(() => {
    event.target.classList.add("hide")
  }, 0);
}
function dragEnd(e) { 
  e.target.classList.remove("hold")
  e.target.classList.remove("hide")
}

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.target.classList.add("hovered");
}
function dragLeave(e) {
  e.target.classList.remove("hovered");
}
function dragDrop(e) {
  e.target.classList.remove("hovered");
  e.target.append(item);
}