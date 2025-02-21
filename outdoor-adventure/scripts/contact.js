document.addEventListener("DOMContentLoaded", function () {
	// Form Submission Handling
	const contactForm = document.getElementById("contactForm");

	contactForm.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent page reload

		// Get form values
		const firstName = document.getElementById("firstName").value;
		const lastName = document.getElementById("lastName").value;
		const email = document.getElementById("email").value;
		const phone = document.getElementById("phone").value;
		const questions = document.getElementById("questions").value || "N/A"; // Default to "N/A" if empty
		const experience = document.getElementById("experience").value || "N/A"; // Default to "N/A" if empty

		// Display values in the Application Details section
		document.getElementById("displayFirstName").textContent = firstName;
		document.getElementById("displayLastName").textContent = lastName;
		document.getElementById("displayEmail").textContent = email;
		document.getElementById("displayPhone").textContent = phone;
		document.getElementById("displayQuestions").textContent = questions;
		document.getElementById("displayExperience").textContent = experience;

		// Display Submission Time
		const timestamp = new Date().toLocaleString();
		document.getElementById("timestamp").textContent = timestamp;

		// Clear the form after submission
		contactForm.reset();
	});
});

// Hamburger menu logic
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburgerButton && navMenu) {
    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}