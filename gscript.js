
let notes = ["A","B","C","D","E","F","G"];

let buttonNote = document.getElementById("randomnote");

let noteText = document.getElementById("noteText");
let previewText = document.getElementById("previewText");

let buttonChord = document.getElementById("randomchord");

let lastnote = "";
let lastchord = "";

const buttonTimer = document.getElementById("toggle-timer");
const timerBPMi = document.getElementById("bpm-input");

const timeBeatsi = document.getElementById("beats-input");

let windowVisible = true;

let timer = null;
let beatTimer = null;

let mode = "chord";

let notesQueue = [];
let chordsQueue = [];

function getRandomNote(sharps,previous) {
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

        const showAsFlat = Math.random() < 0.25; //random bool, but sharps more often

        let sharpText = note.concat("", "♯")
        
        if (sharpText == "B♯" || sharpText == "E♯") {
            finalText = note
        } else {
            
            let flatVariantN = ""
            let flatText = ""

            finalText = finalText = sharpText

            if (note == "G") {
                flatVariantN = "A"
            } else {
                flatVariantN = notes[i+1];
            }

            flatText = flatVariantN.concat("","♭")

            if (showAsFlat) {
                finalText = flatText;
            }

        }
        
    } else { //not sharp, just display
        finalText = note
    }

    if (finalText == previous) {
        finalText = getRandomNote()
    }

    return finalText

}

function randomNote() {

    mode = "note";

    if (notesQueue[1] == null) {
        notesQueue[1] = getRandomNote(true)
    }

    //move [1] to [0], gen new 1, update disps

    notesQueue[0] = notesQueue[1]
    notesQueue[1] = getRandomNote(true,lastnote)

    //let finalText = getRandomNote(true)

    noteText.textContent = notesQueue[0]//finalText
    previewText.textContent = notesQueue[1]

    //console.log(finalText)
    lastnote = notesQueue[0];  

}

function getRandomChord(previous) {
    let note = getRandomNote(false)

    let minor = Math.floor(Math.random()); //1 or 0
    let seventh = Math.floor(Math.random()*4) // 0 - no, 1 - maj7, 2 - m7, 3 - 7(dom) for now just with major chords

    let finalText = ""

    if (minor == 0) {
        switch (seventh) {
            case 0: //no seventh
                finalText = note.concat("","")
                break;
            case 1: //maj7
                finalText = note.concat("","maj7")
                break;
            case 2: //m7
                finalText = note.concat("","m7")
                break;
            case 3: //dominant 7
                finalText = note.concat("","7")
                break;
        }
    } else {
        finalText = note.concat("","m")
    }

    return finalText
}

function randomChord() {

    mode = "chord";

    if(chordsQueue[1] == null) {
       chordsQueue[1] = getRandomChord(lastchord);
    }

    chordsQueue[0] = chordsQueue[1]
    chordsQueue[1] = getRandomChord(lastchord);

    noteText.textContent = chordsQueue[0]
    previewText.textContent = chordsQueue[1];

    lastchord = chordsQueue[0];

}

function toggleWindow() {
    windowVisible = !windowVisible;

    previewText.style.display = windowVisible ? "block" : "none";
}

buttonNote.addEventListener("click", randomNote)
buttonChord.addEventListener("click",randomChord)

buttonTimer.addEventListener("click", () => {
    

    if (timer === null) {

        if (Number(timerBPMi.value) <= 0 || Number(timeBeatsi.value) <= 0) {
            console.log("bpm/beats can't be less or equal to 0!")
            return
        }

        const bpm = Number(timerBPMi.value);

        var beats = 4;
        beats = Number(timeBeatsi.value);

        const mstime = (60000/bpm) * beats ;
        const beattime = mstime / beats;

        if (mode == "chord") {
            randomChord(); //for now

            timer = setInterval(randomChord,mstime);
            
        } else if (mode == "note") {
            randomNote(); //for now

            timer = setInterval(randomNote,mstime);
        }
        
        beatTimer = setInterval(() => {
            noteText.classList.remove("beat-pulse");

            void noteText.offsetWidth;

            noteText.classList.add("beat-pulse");
        }, beattime)

        buttonTimer.classList.toggle("active");

    } else {
        clearInterval(timer);
        timer = null;

        clearInterval(beatTimer);
        beatTimer = null;

        buttonTimer.classList.toggle("active");
    }
})

