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

// document.addEventListener("keydown", ()=> console.log("a key was pressed"));
//keybord events keydown, keyup, keypress
document.addEventListener("keydown", function (event) {
	console.log("A key was pressed");
	console.log(event);
	console.log(event.code, " - ", event.key);
	if (event.key === "Escape" && !modal.classList.contains("hidden")) {
		console.log("Esc was preessed!");
		// if(!modal.classList.contains("hidden")){
		//     closeModal();
		// }
		closeModal();
	}
});
