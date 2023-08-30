const form = document.getElementById("form");
const emailInput = document.getElementById("emailInput");
const errorSpan = document.querySelector(".error");
const input = document.getElementsByTagName("input");

form.addEventListener("submit", function (event) {
	event.preventDefault(); // Prevent the default form submission
	const emailValue = emailInput.value;
	// console.log(emailValue);
	if (emailValue === "" || !emailValue.includes("@")) {
		errorSpan.textContent = "Please enter a valid email address";
		return;
	}
	// Clear the error message if the email is valid
	errorSpan.textContent = "";

	// Perform further actions (e.g., form submission) if needed
});
