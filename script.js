"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};
const openModal = function () {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
	btnsOpenModal[i].addEventListener(
		"click",
		openModal
		// function () {
		// console.log("Button " + (i + 1) + " clicled");
		// modal.classList.remove("hidden");
		// overlay.classList.remove("hidden");

		//modal.style.display = "block";
		//}
	);
}
btnCloseModal.addEventListener(
	"click",
	closeModal
	//     function () {
	// 	// modal.classList.add("hidden");
	// 	// overlay.classList.add("hidden");
	// }
);

overlay.addEventListener(
	"click",
	closeModal
	//     function () {
	// 	modal.classList.add("hidden");
	// 	overlay.classList.add("hidden");
	// }
);
