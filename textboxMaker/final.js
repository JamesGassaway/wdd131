let textboxPages = [
    {
        page: 0,
        image: 'greybox.png',
        image_name: 'placeholder box',
        image_gif: 'greybox.png',
        speed: 'default',
        text: 'Placeholder text'
    }
]

let currentPage = 0;
let visiblePage = 0;

const defaultObject = textboxPages[currentPage];

console.log(defaultObject);

function textboxTemplate(textbox, page){
    
	return `
        
        <div class="sample-textbox">
            <img id="gif" src="${textbox[page].image_gif}" alt="${textbox[page].image_name}" />
            <div class="sampleTextboxInfo">
                <p>${textbox[page].text}</p>
                <button id="lastPage">Last Page</button>
                <button id="nextPage">Next Page</button>
            <//div>
        </div>
        
	`
}

function textboxFormTemplate(index) {
    return `
        <img class="profile" src="greybox.png" alt="cat gif" />
        <form class="entry-data">
            <input type="hidden" name="page" value="${index}">
            <div class="options">
                <p>Profile: </p>
                <select name="images" class="images">
                    <option value="greybox.png">None</option>
                    <option value="cat_neutral.png">Cat</option>
                    <option value="bunny_neutral.png">Bunny</option>
                </select>
                <p>Speed: </p>
                <select name="speeds" class="speeds">
                    <option value="default">Default</option>
                    <option value="slow">Slow</option>
                    <option value="fast">Fast</option>
                </select>
            </div>
            <label class="textEntry">
                <textarea type="text-entry" class="text-entry" placeholder="Enter your text here!"></textarea>
            </label>
        </form>
    `;
}

// Function to add a new textbox page
function addPage() {
    console.log("Page added");

    const newPageIndex = textboxPages.length;

    textboxPages.push({
        page: newPageIndex,
        image: 'greybox.png',
        image_name: 'placeholder box',
        image_gif: 'greybox.png',
        speed: 'default',
        text: 'New Page'
    });

    currentPage = newPageIndex;

    // Create a new page container
    const newPage = document.createElement("div");
    newPage.classList.add("page-container");
    newPage.innerHTML = textboxFormTemplate(newPageIndex); // Use template function

    document.querySelector(".pages-container").appendChild(newPage);

    // Find the select inside the new page and attach the event listener using event delegation
    newPage.querySelector('.images').addEventListener('change', changeImage); // Direct listener to newly added element
    newPage.querySelector('.textEntry').addEventListener('change', changeText);
}


// Function to delete the current page
function deletePage() {
    if (textboxPages.length > 1) {
        textboxPages.pop();
        currentPage = Math.max(0, currentPage - 1);

        // Remove the last added form
        let pages = document.querySelectorAll('.page-container');
        if (pages.length > 1) {
            pages[pages.length - 1].remove();
        }
    }
}

// Function to change the image based on selection
function changeImage(event) {
    // Find the container of the select that was changed
    const container = event.target.closest(".page-container");

    if (!container) return; // Safety check

    // Find the associated image inside the same container
    const displayImage = container.querySelector('.profile');
    displayImage.src = event.target.value;

    // Get the page index from the hidden input
    const pageIndex = parseInt(container.querySelector('input[name="page"]').value);

    // Update the correct page in textboxPages
    if (event.target.value == "cat_neutral.png") {
        textboxPages[pageIndex].image_gif = "cat_talking.gif";
    }
    else if (event.target.value == "bunny_neutral.png") {
        textboxPages[pageIndex].image_gif = "bunny_talking.gif";
    }
    else if (event.target.value == "greybox.png") {
        textboxPages[pageIndex].image_gif = "greybox.png";
    }
    textboxPages[pageIndex].image = event.target.value;
}

// Function to change the image based on selection
function changeText(event) {
    // Find the container of the select that was changed
    const container = event.target.closest(".page-container");

    if (!container) return; // Safety check

    // Get the page index from the hidden input
    const pageIndex = parseInt(container.querySelector('input[name="page"]').value);

    // Update the correct page in textboxPages
    textboxPages[pageIndex].text = event.target.value;
}

// Function to navigate pages
function changePage(index) {
    if (index >= 0 && index < textboxPages.length) {
        visiblePage = index;
        renderTextbox();
    }
}

document.body.addEventListener('click', function(event) {
    if (event.target.id === 'addPage') {
        addPage();
    } else if (event.target.id === 'deletePage') {
        deletePage();
    } else if (event.target.id === 'generateTextbox') {
        renderTextbox();
    } else if (event.target.id === 'nextPage') {
        if (visiblePage + 1 < textboxPages.length) {
            visiblePage+=1;
            renderTextbox();
        }
        else {
            console.log("No more pages")
        }
    } else if (event.target.id === 'lastPage') {
        if (visiblePage - 1 >= 0) {
            visiblePage-=1;
            renderTextbox();
        }
        else {
            console.log("Can't go past first page")
        }
    }
});

function renderTextbox() {
    console.log("textboxPages:", textboxPages);
    console.log("currentPage:", visiblePage);

	let textboxContainer = document.querySelector('.textbox_container');
	let html = textboxTemplate(textboxPages, visiblePage);
	textboxContainer.innerHTML = html;
}

function getDefaultTextbox() {

	const defaultObject = textboxPages[0];
	return defaultObject;
}

// Initialize function to set up event listeners after page load
function init() {
    const textbox = getDefaultTextbox();
    let textboxContainer = document.querySelector('.textbox_container');
    if (!textboxContainer) return;
    textboxContainer.innerHTML = '';
    //renderTextbox();
}

init();