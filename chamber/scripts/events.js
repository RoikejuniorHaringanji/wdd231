document.addEventListener("DOMContentLoaded", () => {
    const events = [
        {
            title: "Buenos Aires Business Summit",
            date: "October 10, 2024",
            location: "789 Commerce Street, Buenos Aires",
            time: "10:00 AM - 2:00 PM UTC-3"
        },
        {
            title: "Entrepreneurship & Innovation Forum",
            date: "November 18, 2024",
            location: "Buenos Aires Trade Center",
            time: "3:00 PM - 7:00 PM UTC-3"
        },
        {
            title: "Small Business Growth Workshop",
            date: "December 5, 2024",
            location: "City Business Hub, Buenos Aires",
            time: "4:00 PM - 8:00 PM UTC-3"
        },
        {
            title: "Annual Marketing Strategies Conference",
            date: "January 20, 2025",
            location: "Buenos Aires Convention Center",
            time: "2:00 PM - 6:00 PM UTC-3"
        },
        {
            title: "Sustainable Business Practices Expo",
            date: "February 25, 2025",
            location: "Eco Business Park, Buenos Aires",
            time: "6:00 PM - 10:00 PM UTC-3"
        },
        {
            title: "Women in Business Leadership Summit",
            date: "March 28, 2025",
            location: "Downtown Conference Hall, Buenos Aires",
            time: "1:00 PM - 5:00 PM UTC-3"
        }
    ];

    const eventsList = document.getElementById("events-list");

    events.forEach(event => {
        const eventItem = document.createElement("li");

        const eventTitle = document.createElement("h2");
        eventTitle.textContent = event.title;

        const eventDate = document.createElement("p");
        eventDate.textContent = `Date: ${event.date}`;

        const eventLocation = document.createElement("p");
        eventLocation.textContent = `Location: ${event.location}`;

        const eventTime = document.createElement("p");
        eventTime.textContent = `Time: ${event.time}`;

        eventItem.appendChild(eventTitle);
        eventItem.appendChild(eventDate);
        eventItem.appendChild(eventLocation);
        eventItem.appendChild(eventTime);

        eventsList.appendChild(eventItem);
    });
});
