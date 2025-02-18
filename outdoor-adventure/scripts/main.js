// Wait until the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Set the current year dynamically in the footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Add content to the club-intro section
    document.getElementById("club-intro").innerHTML = `
        <h2>Join the Club</h2>
        <p>Embark on a journey of discovery and connection with nature. Our club offers a range of activities and benefits for outdoor enthusiasts of all levels.</p>
    `;

    // Add content to the benefits section
    document.getElementById("benefits").innerHTML = `
        <h2>Why Join Us?</h2>
        <ul>
            <li>Guided outdoor trips with experts</li>
            <li>Exclusive gear discounts</li>
            <li>Community events and meetups</li>
            <li>Access to members-only adventure guides</li>
        </ul>
    `;

    // Add content to the join section
    document.getElementById("join").innerHTML = `
        <h2>Become a Member</h2>
        <p>Ready for your next adventure? Join our club today!</p>
        <a href="contact.html" class="btn">Join Now</a>
    `;
});
