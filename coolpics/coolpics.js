const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector("#navbar");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector("#navbar");
    if (window.innerWidth > 1100) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
}

function viewHandler(event) {
    if (event.target.tagName !== "IMG") return; // Ignore clicks on non-images

    let clickedImage = event.target;
    let fileName = clickedImage.src.split("/").pop();
    let fullImagePath = fileName.replace("-sm", "-full");

    let modalHTML = viewerTemplate(fullImagePath, clickedImage.alt);
    document.body.insertAdjacentHTML("afterbegin", modalHTML);

    document.querySelector(".viewer .close-viewer").addEventListener("click", closeViewer);
}

document.querySelector(".gallery").addEventListener("click", viewHandler);

function closeViewer() {
    document.querySelector(".viewer").remove();
}