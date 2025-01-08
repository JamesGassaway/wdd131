const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = `<span class="highlight">©${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastModified");

lastModified.innerHTML = `<span class="highlight">Last Modifification: ${document.lastModified}</span>`;
/*
document.getElementById('hamburger').addEventListener('click', () => {
    const navbar = document.getElementById('navbar');
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';
        navbar.style.flexDirection = 'column'; // Stack the links vertically
        navbar.style.position = 'absolute'; // Position it absolutely
        navbar.style.backgroundColor = '#0AA9FF'; // Match the background color
        navbar.style.width = '100%'; // Full width
        navbar.style.top = '50px'; // Adjust as needed
    }
});
*/

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }