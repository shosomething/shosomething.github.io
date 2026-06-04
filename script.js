const boxes = document.querySelectorAll(".box");

var maxrotate = 27

boxes.forEach((box) => {
    
    box.addEventListener("mousemove", (e) => {
        rotatee(e, box)
    });

    document.addEventListener("mousemove", (e) => {
        highlight(e, box)
    });

    box.addEventListener("mouseleave", () => {
        box.style.setProperty("--rotateX", "0deg");
        box.style.setProperty("--rotateY", "0deg");
        
        box.style.setProperty("--scale", "1");

        box.style.zIndex = "1";
    });

});



function rotatee(event, element) {

    const x = event.clientX;
    const y = event.clientY;

    const rect = element.getBoundingClientRect();

    const shineX = (x - rect.left) / rect.width * 100;
    const shineY = (y - rect.top) / rect.height * 100;

    const centerX = rect.left + (rect.width / 2);
    const centerY = rect.top + (rect.height / 2);

    

    const offsetX = ((x - centerX) / centerX ) * maxrotate;
    const offsetY = ((y - centerY) / centerY ) * maxrotate;
    
    element.style.setProperty("--rotateX", -offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");

    element.style.setProperty("--scale", 1.15);

    element.style.zIndex = "1000";

}

function highlight(event, element) {
    
    const x = event.clientX;
    const y = event.clientY;

    const rect = element.getBoundingClientRect();

    const shineX = (x - rect.left) / rect.width * 100;
    const shineY = (y - rect.top) / rect.height * 100;

    element.style.setProperty("--shineX", shineX + "%");
    element.style.setProperty("--shineY", shineY + "%");


}

const translations = {
    en: {
        choose: "choose wiselly..."
    },
    ja: {
        choose: "賢く選ぶ…"
    }
}

function applytranslation() {
    let lang = window.location.hash.replace("#", "") || "en";

    if (!translations[lang]) {
        lang = 'en';
    }

    document.documentElement.lang = lang;
    document.getElementById('choose').innerText = translations[lang].choose;
}

document.addEventListener("DOMContentLoaded", applytranslation);
window.addEventListener("hashchange", applytranslation);