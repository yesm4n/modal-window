const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const openModal = document.querySelectorAll(".show-modal");

const openAllModals = function () {
  modal.classList.remove("hidden");
  //   overlay.classList.remove("hidden");
};

const closeAllModals = function () {
  modal.classList.add("hidden");
  //   overlay.classList.add("hidden");
};

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", openAllModals);

  closeModal.addEventListener("click", closeAllModals);

  //   overlay.addEventListener("click", closeAllModals);
}

document.addEventListener("keydown", function (e) {
  //   console.log(e.key);
  if (e.key === "Escape") closeAllModals();
});

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape") {
//     if (!modal.classList.contains("hidden")) {
//       closeAllModals();
//     }
//   }
// });
