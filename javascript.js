
const freelancerList = document.getElementById("freelancer-list");
const averagePriceElement = document.getElementById("average-price");
const freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 },
    { name: "karol", occupation: "Freelancers", price: 70 }
];

let averagePrice = 40;
let intervalId;

// Function to update the average starting price
function updateAveragePrice() {
    const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    averagePrice = totalPrice / freelancers.length;
    averagePriceElement.textContent = `$${averagePrice.toFixed(2)}`;
}

// Function to add a new freelancer
function addFreelancer(name, occupation, price) {
    const newFreelancer = document.createElement("li");
    newFreelancer.innerHTML = `
        <span class="name">${name}</span>
        <span class="occupation">${occupation}</span>
        <span class="price">$${price}</span>
    `;
    freelancerList.appendChild(newFreelancer);
    freelancers.push({ name, occupation, price });
    updateAveragePrice();
}

// Simulate the continuous addition of new freelancers
let count = 1;
intervalId = setInterval(function() {
    const newFreelancerName = `Freelancer${count}`;
    const newOccupation = `Occupation${count}`;
    const newPrice = Math.floor(Math.random() * 100) + 1; // Random price between 1 and 100
    addFreelancer(newFreelancerName, newOccupation, newPrice);
    count++;
}, 5000); // Add a new freelancer every 5 seconds

// Stop adding new freelancers after a certain time (e.g., 30 seconds)
setTimeout(function() {
    clearInterval(intervalId);
}, 5000);