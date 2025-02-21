document.addEventListener("DOMContentLoaded", function () {

	// Dynamic Benefits Section
	const benefitsGrid = document.querySelector(".benefits-grid");

	const benefits = [
		{ img: "images/trail-map.webp", title: "Exclusive Trail Maps", desc: "Gain access to detailed maps and hidden trails curated by experts." },
		{ img: "images/events.webp", title: "Exciting Events", desc: "Join hikes, camping trips, and biking adventures with fellow members." },
		{ img: "images/discount.webp", title: "Special Discounts", desc: "Enjoy exclusive discounts on gear, guided tours, and outdoor experiences." },
		{ img: "images/safety.webp", title: "Safety & Guidance", desc: "Receive expert advice and tips to stay safe on your adventures." }
	];

	benefits.forEach(benefit => {
		const div = document.createElement("div");
		div.classList.add("benefit");
		div.innerHTML = `
			<img src="${benefit.img}" alt="${benefit.title}">
			<h3>${benefit.title}</h3>
			<p>${benefit.desc}</p>
		`;
		benefitsGrid.appendChild(div);
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