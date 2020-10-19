const SITE_CONTAINER = "intro-container";
const SITE_CONTAINER2 = "intro2-container";
const INTRO_TEXT_CONTAINER_ID = "introText-container";
const INTRO_TEXT_CONTAINER2_ID = "introText2-container";
const INTRO_TEXT_ID = "intro-text-";
const INTRO_TEXT2_ID = "intro2-text-";
const INTRO1_TEXT = ["HELLO", "MY","NAME","IS","RICH"];
const INTRO2_TEXT = ["I", "AM A","WEB DEVELOPER","AND","DESIGNER"];

window.addEventListener('scroll', function() {
    if(pagePosition() >= 0 && pagePosition() < 33) {
        setNavBackgroundColor("nav-home", 151, 75, 3, 0.8);
    }
    if(pagePosition() >= 33 && pagePosition() < 65) {
        setNavBackgroundColor("nav-home", 80, 70, 20, 0.7);
    }
    if(pagePosition() >= 65 && pagePosition() < 98) {
        setNavBackgroundColor("nav-home", 221, 242, 85, 0.35);
    }
    if(pagePosition() >= 98) {
        setNavBackgroundColor("nav-home", 151, 75, 3, 0.6);
    }
})

setInterval(()=>{
    var intro2 = document.getElementById("intro2-container");
    var intro = document.getElementById("intro-container");

    var reset = ()=> {
        return new Promise();

        setTimeout(()=>{
            intro.style.visibility = "visible";
            intro2.style.visibility = "hidden";
        }, 5000);
    }

    intro.style.visibility = "hidden";
    intro2.style.visibility = "visible";
    async ()=> {
        await reset();
    }
},5000);

function autoScroll(page, interval) {
    setTimeout(() => {
        document.querySelector(page).scrollIntoView(top);
    }, interval);
}

function setNavBackgroundColor(navId, red, blue, green, alpha) {
    document.getElementById(navId).style.backgroundColor = `rgba(${red}, ${blue}, ${green}, ${alpha})`;
}

function pagePosition() {
    let docElement = document.documentElement;
    // position of viewport in %
    let pos = Math.round((document.body.scrollTop || docElement.scrollTop) / (docElement.scrollHeight - docElement.clientHeight) * 100);
    //console.log(pos + "%");

    return pos;
}

let submit = document.getElementById("submit");
submit.addEventListener("click", function(){
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    alert(`Thank you ${firstname} ${lastname}`);
});