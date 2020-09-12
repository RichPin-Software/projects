const SITE_CONTAINER = "site-container";
const INTRO_TEXT_CONTAINER_ID = "introText-container";
const INTRO_TEXT_ID = "intro-text-";
const INTRO_TEXT2_ID = "intro2-text-";
const INTRO1_TEXT = ["HELLO", "MY","NAME","IS","RICH"];
const INTRO2_TEXT = ["I", "AM","A","WEB","DEVELOPER","AND","DESIGNER"];

displayIntro(SITE_CONTAINER, INTRO1_TEXT, INTRO_TEXT_CONTAINER_ID, INTRO_TEXT_ID);
replaceIntro(INTRO_TEXT_CONTAINER_ID, 5000, SITE_CONTAINER, INTRO2_TEXT, INTRO_TEXT_CONTAINER_ID, INTRO_TEXT2_ID);

// Display Intro Text
function displayIntro(siteContainer, introTextArry, introTextContainerId, introTextId) {
    // create intro text container
    let div = document.createElement("div");
    document.getElementById(siteContainer).appendChild(div);
    div.id = introTextContainerId;

    for(let x=0;x<introTextArry.length;x++){
        // create header to display intro text
        let h1 = document.createElement("h1");
        h1.id = introTextId + x;
        console.log(h1.id);
        document.getElementById(introTextContainerId).appendChild(h1);

        h1.innerHTML = introTextArry[x];
    }
}

// Replace Intro Text Using Timer
function replaceIntro(textIdRemove, interval, siteContainer, introTextArry, introTextContainerId, introTextId) {
    setTimeout(() => {
        // after specified interval...
        // remove previous text
        document.getElementById(textIdRemove).remove();

        displayIntro(siteContainer, introTextArry, introTextContainerId, introTextId);
    }, interval);
}