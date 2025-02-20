// Array of leadership team members (images, names, and roles)
const leadershipData = [
    {
        name: "Steven Doe",
        role: "President",
        image: "images/steven-doe.webp"
    },
    {
        name: "John Smith",
        role: "Vice President",
        image: "images/john-smith.webp"
    },
    {
        name: "Alice Johnson",
        role: "Event Coordinator",
        image: "images/Alice-johnson.webp"
    },
    {
        name: "Robert Brown",
        role: "Member Engagement",
        image: "images/Robert-brown.webp"
    }
];

// Function to dynamically insert the leadership team into the page with lazy loading
function loadLeadershipTeam() {
    const gridContainer = document.getElementById('leadership-grid'); // Ensure this matches your HTML

    leadershipData.forEach(leader => {
        const leaderDiv = document.createElement('div');
        leaderDiv.classList.add('leader');

        // Create the image element with lazy loading
        const img = document.createElement('img');
        img.src = leader.image;
        img.alt = `${leader.name} - ${leader.role}`;
        img.loading = "lazy"; // Enables lazy loading
        img.classList.add("leader-img"); // Optional: Add a class for styling

        // Create the name and role elements
        const name = document.createElement('h3');
        name.textContent = leader.name;

        const role = document.createElement('p');
        role.textContent = leader.role;

        // Append elements to the leaderDiv
        leaderDiv.appendChild(img);
        leaderDiv.appendChild(name);
        leaderDiv.appendChild(role);

        // Append the leaderDiv to the grid container
        gridContainer.appendChild(leaderDiv);
    });
}

// Load leadership team when the page is fully loaded
document.addEventListener("DOMContentLoaded", loadLeadershipTeam);
// Hamburger menu logic
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburgerButton && navMenu) {
    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}