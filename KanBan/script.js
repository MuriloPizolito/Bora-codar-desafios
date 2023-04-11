/** help */
function log(message) {
  console.log(">" + message)
}

/** app */
const cards = document.querySelectorAll(".card")
const dropzones = document.querySelectorAll(".cards")

/** our cards */
cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart)
  card.addEventListener("drag", drag)
  card.addEventListener("dragend", dragend)
})

function dragstart() {
  //log("CARD: Start dragging ")
  dropzones.forEach((cards) => cards.classList.add("highlight"))

  //this = card
  this.classList.add("is-dragging")
}

function drag() {
  //log("CARD: Is dragging ")
}

function dragend() {
  //log("CARD: Stop drag!")
  dropzones.forEach((cards) => cards.classList.remove("highlight"))

  this.classList.remove("is-dragging")
}

/** place where we will drop cards */
dropzones.forEach((cards) => {
  cards.addEventListener("dragenter", dragenter)
  cards.addEventListener("dragover", dragover)
  cards.addEventListener("dragleave", dragleave)
  cards.addEventListener("drop", drop)
})

function dragenter() {
  //log("DROPZONE: Enter in zone")
}

function dragover() {
  //log("DROPZONE: Over")
  this.classList.add("over")

  //get dragging card
  const cardBeingDragged = document.querySelector(".is-dragging")

  //this = cards
  this.appendChild(cardBeingDragged)
}

function dragleave() {
  //log("DROPZONE: Leave")
  this.classList.remove("over")
}

function drop() {
  //log("DROPZONE: dropped")
  this.classList.remove("over")
}
