const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = `<span class="highlight">©${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastModified");

lastModified.innerHTML = `<span class="highlight">Last Modifification: ${document.lastModified}</span>`;
