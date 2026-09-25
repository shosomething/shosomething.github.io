
let notes = ["A","B","C","D","E","F","G"];

let buttonNote = document.getElementById("randomnote")

let noteText = document.getElementById("noteText")

let buttonChord = document.getElementById("randomchord")

let lastnote = ""

function getRandomNote(sharps) {
    let i = Math.floor(Math.random() * notes.length);
    let note = notes[i];

    let sharp = 0;

    if (sharps == true) {
        sharp = Math.round(Math.random());

    } else {
        sharp = 0
    }
    
    //console.log(note);
    //console.log(sharp);

    let finalText = "";

    if (sharp == 1) { //sharp, calc if possible, calc flat ver, display
        let sharpText = note.concat("", "♯")
        
        if (sharpText == "B♯" || sharpText == "E♯") {
            finalText = note
        } else {
            
            let flatVariantN = ""
            let flatText = ""

            if (note == "G") {
                flatVariantN = "A"
            } else {
                flatVariantN = notes[i+1];
            }

            flatText = flatVariantN.concat("","♭")

            finalText = sharpText.concat("/",flatText)
        }
        
    } else { //not sharp, just display
        finalText = note
    }

    return finalText

}

function randomNote() {
    let finalText = getRandomNote(true)

    if (finalText == lastnote) {
        console.log("repeat")
        randomNote()
    } else {

        let scalingThing = 5

        let var1 = (Math.random() - 0.5) * scalingThing
        let var2 = (Math.random() - 0.5) * scalingThing
        let var3 = (Math.random() - 0.5) * scalingThing
        let var4 = (Math.random() - 0.5) * scalingThing
        let var5 = (Math.random() - 0.5) * scalingThing

        /*noteText.animate([
            { transform: `translate3d(${var1}px, ${var2}px, 0)` },
            { transform: `translate3d(${var2}px, ${var3}px, 0)` },
            { transform: `translate3d(${var4}px, 0, 0)` },
            { transform: `translate3d(${var4}px, ${var4}px, 0)` },
            { transform: `translate3d(${var5}px, 0, 0)` },
            { transform: `translate3d(${var4}px, ${var5}px, 0)` },
            { transform: `translate3d(${var1}px, 0, 0)` }
        ], {
            duration: 500,
            easing: 'cubic-bezier(.36,.07,.19,.97)'
        }); */

        noteText.textContent = finalText
        lastnote = finalText
    }

    //console.log(finalText)    

}

function randomChord() {
    let note = getRandomNote(false)

    let minor = Math.round(Math.random()); //1 or 0

    let finalText = ""

    if (minor == 0) {
        finalText = note.concat("","")
    } else {
        finalText = note.concat("","m")
    }

    noteText.textContent = finalText

}

buttonNote.addEventListener("click", randomNote)
buttonChord.addEventListener("click",randomChord)