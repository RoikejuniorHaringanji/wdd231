document.addEventListener("DOMContentLoaded", () => {
    // Fetch the JSON file
    fetch("data/data.json")
        .then(response => response.json()) // Convert to JavaScript object
        .then(data => {
            displayActivities(data.hiking_activities, "Hiking", "hiking-activity");
            displayActivities(data.biking_activities, "Biking", "biking-activity");
            displayActivities(data.camping_activities, "Camping", "camping-activity");
        })
        .catch(error => console.error("Error loading data:", error));
});

// Function to display activities
function displayActivities(activities, title, className) {
    const container = document.getElementById("activitiesList");

    const section = document.createElement("section");
    section.classList.add(className);
    section.innerHTML = `<h3>${title}</h3>`;

    activities.forEach(activity => {
        const activityCard = document.createElement("div");
        activityCard.classList.add("activity-card");

        activityCard.innerHTML = `
            <img src="${activity.image}" alt="${activity.activity}">
            <h4>${activity.activity}</h4>
            <p><strong>Type:</strong> ${activity.type}</p>
            <p>${activity.description}</p>
        `;

        section.appendChild(activityCard);
    });

    container.appendChild(section);
}
// Hamburger menu logic
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburgerButton && navMenu) {
    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}