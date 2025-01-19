const themeSelector = document.querySelector("#switch")
const image = document.querySelector('.logo');
function changeTheme(event) {
// check to see what the current value of our select is.
event.target.value
// The current value is conveniently found in themeSelector.value!

// if the value is dark then:
if (event.target.value === "dark") {
    // add the dark class to the body
    document.body.classList.add("dark");
    // change the source of the logo img to point to the white logo.
    image.setAttribute('src', 'byui-logo_white.png')
}
// otherwise
else {
    // remove the dark class
    document.body.classList.remove("dark");
    // make sure the logo src is the blue logo.
    image.setAttribute('src', 'byui-logo_blue.webp')
}

}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);