// Display Intro Text
function displayIntro(siteContainer, introTextArry, introTextContainerId, introTextId) {
    // create intro text container
    let div = document.createElement("div");
    document.getElementById(siteContainer).appendChild(div);
    div.id = introTextContainerId;

    for(let x=0;x<introTextArry.length;x++){
        // create header to display intro text
        let h1 = document.createElement("h1");
        // creates user specified id for each h1 element
        // + index in introTextArray (ex: "h1-id-0", "h1-id-1", etc.)
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