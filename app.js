const form = document.getElementById("form");
const emailInput = document.getElementById("emailInput");
const errorSpan = document.querySelector(".error");
const successMessage = document.getElementById("successMessage");
const container = document.querySelector(".container"); // Select the container element

form.addEventListener("submit", function (event) {
	event.preventDefault(); // Prevent the default form submission
	const emailValue = emailInput.value;

	if (emailValue === "" || !emailValue.includes("@")) {
		errorSpan.textContent = "Please enter a valid email address";
	} else {
		container.style.display = "none"; // Hide the container
		successMessage.style.display = "block";
		errorSpan.textContent = "";
	}
});
