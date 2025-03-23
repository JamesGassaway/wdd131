// Step 1.
document.getElementById('intro').style.backgroundColor = "#f2c556";

// Step 2.
document.querySelector('em').style.backgroundColor = "#acbfcc";

// Step 3.
document.querySelector('em').textContent = "USS Voyager Starship";

// Step 4.
const starshipDiv = document.getElementById('starship');
const starship = document.createElement('img');
starship.src = "https://bit.ly/3RfG4sY";
starship.alt = "USS";

// Step 5.
starship.id = "ship";

// Step 6.
starship.className = "rounded";
starshipDiv.appendChild(starship);