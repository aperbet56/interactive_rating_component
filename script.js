// Récupération des différents éléments
const numbers = document.querySelectorAll(".number");
const btn = document.querySelector(".btn");
const backBtn = document.querySelector(".back");
const selectedNumber = document.querySelector(".selected__number");
const selectedNumberModal = document.querySelector(".selected__number__modal");
const ratingContainer = document.getElementById("rating__container");
const modalContainer = document.getElementById("modal__container");

const selected = numbers.forEach((number) => {
  // Ecoute de l'événement "click" sur l'élément number
  number.addEventListener("click", () => {
    // Retrait de la classe "active" pour tous les éléments number
    numbers.forEach((otherNumber) => {
      otherNumber.classList.remove("active");
    });

    // Ajout de la classe "active" sur le nombre qui a été choisi par l'internaute
    number.classList.add("active");
  });
});

// Ecoute de l'événement "click" sur le bouton submit
btn.addEventListener("click", () => {
  const activeNumber = document.querySelector(".number.active");

  if (activeNumber) {
    ratingContainer.classList.add("hidden");
    modalContainer.classList.remove("hidden");
    selectedNumberModal.textContent = `You selected ${activeNumber.innerText} out of 5`;
    selectedNumber.textContent = "";
  } else {
    selectedNumber.textContent = "Please select a number first.";
  }
});

// Ecoute de l'événement "click" sur le bouton back
backBtn.addEventListener("click", () => {
  ratingContainer.classList.remove("hidden");
  modalContainer.classList.add("hidden");

  const activeNumberModal = document.querySelector(".number.active");
  activeNumberModal.classList.remove("active");
});
