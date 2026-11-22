let questionText = document.getElementById("q")
let button = document.getElementById("button")

let state = "proceed" //also "guess"

let doublenext = "&" // just for defining this func
let doubleprev = "^"// ==||==
let japanesen  = "*"// ==||==

const hiragana = {

    name:       "ひらがな",
    language:   "japanese",
    maxLen:     6,
    max1:   100,
    max2:   1,

    chars1: {
        "あ": "a",
        "い": "i",
        "う": "u",
        "え": "e",
        "お": "o",

        "か": "ka",
        "き": "ki",
        "く": "ku",
        "け": "ke",
        "こ": "ko",

        "さ": "sa",
        "し": "shi",
        "す": "su",
        "せ": "se",
        "そ": "so",

        "た": "ta",
        "ち": "chi",
        "つ": "tsu",
        "て": "te",
        "と": "to",

        "な": "na",
        "に": "ni",
        "ぬ": "nu",
        "ね": "ne",
        "の": "no",

        "は": "ha",
        "ひ": "hi",
        "ふ": "fu",
        "へ": "he",
        "ほ": "ho",

        "ま": "ma",
        "み": "mi",
        "む": "mu",
        "め": "me",
        "も": "mo",

        "や": "ya",
        "ゆ": "yu",
        "よ": "yo",

        "ら": "ra",
        "り": "ri",
        "る": "ru",
        "れ": "re",
        "ろ": "ro",

        "わ": "wa",
        "を": "wo",
        "ん": japanesen,

        "っ": doublenext,
        "ー": doubleprev,
    },

    chars2: {
        "きゃ": "kya",
        "きゅ": "kyu",
        "きょ": "kyo",

        "しゃ": "sha",
        "しゅ": "shu",
        "しょ": "sho",

        "ちゃ": "cha",
        "ちゅ": "chu",
        "ちょ": "cho",

        "にゃ": "nya",
        "にゅ": "nyu",
        "にょ": "nyo",

        "ひゃ": "hya",
        "ひゅ": "hyu",
        "ひょ": "hyo",

        "みゃ": "mya",
        "みゅ": "myu",
        "みょ": "myo",

        "りゃ": "rya",
        "りゅ": "ryu",
        "りょ": "ryo",

        "ぎゃ": "gya",
        "ぎゅ": "gyu",
        "ぎょ": "gyo",

        "じゃ": "ja",
        "じゅ": "ju",
        "じょ": "jo",

        "ぢゃ": "ja",
        "ぢゅ": "ju",
        "ぢょ": "jo",

        "びゃ": "bya",
        "びゅ": "byu",
        "びょ": "byo",

        "ぴゃ": "pya",
        "ぴゅ": "pyu",
        "ぴょ": "pyo",
    },

}

const katakana = {

    name: "カタカナ",
    language: "japanese",
    maxLen: 6,
    max1: 100,
    max2: 1,

    chars1: {
        "ア": "a",
        "イ": "i",
        "ウ": "u",
        "エ": "e",
        "オ": "o",

        "カ": "ka",
        "キ": "ki",
        "ク": "ku",
        "ケ": "ke",
        "コ": "ko",

        "サ": "sa",
        "シ": "shi",
        "ス": "su",
        "セ": "se",
        "ソ": "so",

        "タ": "ta",
        "チ": "chi",
        "ツ": "tsu",
        "テ": "te",
        "ト": "to",

        "ナ": "na",
        "ニ": "ni",
        "ヌ": "nu",
        "ネ": "ne",
        "ノ": "no",

        "ハ": "ha",
        "ヒ": "hi",
        "フ": "fu",
        "ヘ": "he",
        "ホ": "ho",

        "マ": "ma",
        "ミ": "mi",
        "ム": "mu",
        "メ": "me",
        "モ": "mo",

        "ヤ": "ya",
        "ユ": "yu",
        "ヨ": "yo",

        "ラ": "ra",
        "リ": "ri",
        "ル": "ru",
        "レ": "re",
        "ロ": "ro",

        "ワ": "wa",
        "ヲ": "wo",
        "ン": "n",

        "ッ": doublenext,
        "ー": doubleprev,
    },

    chars2: {
        "キャ": "kya",
        "キュ": "kyu",
        "キョ": "kyo",

        "シャ": "sha",
        "シュ": "shu",
        "ショ": "sho",

        "チャ": "cha",
        "チュ": "chu",
        "チョ": "cho",

        "ニャ": "nya",
        "ニュ": "nyu",
        "ニョ": "nyo",

        "ヒャ": "hya",
        "ヒュ": "hyu",
        "ヒョ": "hyo",

        "ミャ": "mya",
        "ミュ": "myu",
        "ミョ": "myo",

        "リャ": "rya",
        "リュ": "ryu",
        "リョ": "ryo",

        "ギャ": "gya",
        "ギュ": "gyu",
        "ギョ": "gyo",

        "ジャ": "ja",
        "ジュ": "ju",
        "ジョ": "jo",

        "ビャ": "bya",
        "ビュ": "byu",
        "ビョ": "byo",

        "ピャ": "pya",
        "ピュ": "pyu",
        "ピョ": "pyo",
    },

}

const cyrillic = {

    name:       "Кириллица",
    language:   "russian",
    maxLen:     10,
    max1:       3,
    max2:       1,

    chars1: {
        // Consonants
        "б": "b",
        "в": "v",
        "г": "g",
        "д": "d",
        "ж": "zh",
        "з": "z",
        "й": "y",
        "к": "k",
        "л": "l",
        "м": "m",
        "н": "n",
        "п": "p",
        "р": "r",
        "с": "s",
        "т": "t",
        "ф": "f",
        "х": "kh",
        "ц": "ts",
        "ч": "ch",
        "ш": "sh",
        "щ": "shch",

        // Soft sign (ь)
        "бь": "bʲ",
        "вь": "vʲ",
        "дь": "dʲ",
        "зь": "zʲ",
        "кь": "kʲ",
        "ль": "lʲ",
        "мь": "mʲ",
        "нь": "nʲ",
        "пь": "pʲ",
        "рь": "rʲ",
        "сь": "sʲ",
        "ть": "tʲ",
        "фь": "fʲ",
        "хь": "xʲ",
    },

    chars2: {
        // Vowels
        "а": "a",
        "е": "e",
        "ё": "yo",
        "и": "i",
        "о": "o",
        "у": "u",
        "ы": "y",
        "э": "e",
        "ю": "yu",
        "я": "ya",

        // Hard sign (ъ) + vowels
        "ъе": "ˈe",
        "ъё": "ˈyo",
        "ъю": "ˈyu",
        "ъя": "ˈya",
    },

}

const scripts = [
    hiragana,
    katakana,
    cyrillic,
    //"hangul"
];


let script = ""
let text = ""
let romanised = ""

function parseText(ttext,romanisedT) {
    let parsedroman = ""



    for (let i = 0; i < romanisedT.length; i++) {

        if (!(romanisedT[i] === "&" || romanisedT[i] === "^" || romanisedT[i] === "*")) {
            parsedroman += romanisedT[i];
            continue;
        }

        if (romanisedT[i] === "&") {
            let nextstr = romanisedT[i+1]
            if (typeof nextstr == 'undefined' || !nextstr) {
                parsedroman += "-";
                continue;
            }
            let nextfirst = nextstr.charAt(0);
            if (nextfirst === "a" || nextfirst === "i" || nextfirst === "u" || nextfirst === "e" || nextfirst === "o") {
                parsedroman += "'";
                continue;
            } else {
                parsedroman += nextfirst;
                continue;
            }

        } else if (romanisedT[i] === "^") {
            let prevstr = romanisedT[i-1]
            let prevlast = prevstr.charAt(prevstr.length - 1);
            parsedroman += prevlast
        } else if (romanisedT[i] === "*") {
            let nextstr = romanisedT[i+1]
            if (typeof nextstr == 'undefined' || !nextstr) {
                parsedroman += "-";
                continue;
            }
            let nextfirst = nextstr.charAt(0);
            if (nextfirst === "a" || nextfirst === "i" || nextfirst === "u" || nextfirst === "e" || nextfirst === "o") {
                parsedroman += "n'";
                continue;
            } else {
                parsedroman += "n";
                continue;
            }
        }


        

    }

    text = ttext
    romanised = parsedroman

}

function generateText(script, length) {
    let generatedText = "";
    let romanisedText = [];

    let lastGroup = null;
    let groupCount = 0;

    for (let i = 0; i < length; i++) {

        let group = Math.random() < 0.5 ? "chars1" : "chars2";

        let max = group === "chars1" ? script.max1 : script.max2;

        if (group === lastGroup && groupCount >= max) {
            group = group === "chars1" ? "chars2" : "chars1";
        }

        let chars = script[group];
        let keys = Object.keys(chars);

        let char = keys[Math.floor(Math.random() * keys.length)];
        let reading = chars[char];

        // Exclusions
        if (
            i === 0 &&
            (reading === japanesen ||
             reading === doublenext ||
             reading === doubleprev)
        ) {
            i--;
            continue;
        }

        // Double vowels
        if (
            ["a", "i", "u", "e", "o"].includes(reading) &&
            romanisedText[i - 1] === reading
        ) {
            i--;
            continue;
        }

        if (group === lastGroup) {
            groupCount++;
        } else {
            lastGroup = group;
            groupCount = 1;
        }

        generatedText += char;
        romanisedText.push(reading);
    }

    parseText(generatedText, romanisedText);
}

function onButton() {
    if (state === "guess") { //text is written and ready to guess
        questionText.textContent = romanised
        button.textContent = "next"

        state = "proceed"

    } else if (state === "proceed") { //showing anwser to previous
        let randomI = Math.floor(Math.random() * scripts.length)
        script = scripts[randomI] //gets random script from list

        let length = Math.floor(Math.random() * script.maxLen) + 1;

        generateText(script,length)

        questionText.textContent = text
        button.textContent = "check"

        state = "guess"

    } else {
        //uhhh
    }
}

button.addEventListener("click", onButton);