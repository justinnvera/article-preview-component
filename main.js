// share button element
const shareButton = document.getElementById("share-image");
// pop-up for desktop element
const sharePopUpDesktop = document.getElementById("share-pop-up-desktop"); 
// pop-up for mobile element
const sharePopUpMobile = document.getElementById("share-pop-up-mobile");
// boolean for whether the popup is displayed or hidden
let isPopUpOpen = false;

function popup() {
    // if screen is mobile and popup is not open
    if (window.screen.width <= 768 && isPopUpOpen === false) {
        sharePopUpMobile.style.display = "flex"; // displays the popup
        isPopUpOpen = true; // sets isPopUpOpen to true
    } 
    // if screen is mobile and popup is open
    else if (window.screen.width <= 768 && isPopUpOpen === true) {
        sharePopUpMobile.style.display = "none"; // hides the popup
        isPopUpOpen = false; // sets isPopUpOpen to false
    } 
    // if screen is desktop and popup is not open
    else if (window.screen.width >= 768 && isPopUpOpen === false) {
        sharePopUpDesktop.style.display = "flex"; // displays the popup
        isPopUpOpen = true; // sets isPopUpOpen to true
    } 
    // if screen is desktop and popup is open
    else if (window.screen.width >= 768 && isPopUpOpen === true) {
        sharePopUpDesktop.style.display = "none"; // hides the popup
        isPopUpOpen = false; // sets isPopUpOpen to false
    } 
    // if there are any errors in the code
    else {
        console.log("error in code") // displays error message in console
    }
}

    
