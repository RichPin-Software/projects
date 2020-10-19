// Display Intro Text
function displayIntro(siteContainer, introTextArry, introTextContainerId, introTextId) {
    // create intro text container
    let div = document.createElement("div");
    document.getElementById(siteContainer).appendChild(div);
    div.id = introTextContainerId;

    for(let x=0;x<introTextArry.length;x++){
        // create header to display intro text
        let p = document.createElement("p");
        // creates user specified id for each h1 element
        // + index in introTextArray (ex: "h1-id-0", "h1-id-1", etc.)
        p.id = introTextId + x;
        console.log(p.id);
        document.getElementById(introTextContainerId).appendChild(p);

        p.innerHTML = introTextArry[x];
    }
}

// Replace Intro Text Using Timer
/*
function replaceIntro(textIdRemove, interval, siteContainer, introTextArry, introTextContainerId, introTextId) {
    setTimeout(() => {
        // after specified interval...
        // remove previous text
        document.getElementById(textIdRemove).remove();

        displayIntro(siteContainer, introTextArry, introTextContainerId, introTextId);
    }, interval);
}*/