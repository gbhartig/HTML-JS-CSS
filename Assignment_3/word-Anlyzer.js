
function analyzeText() {
    alert("Analyzing the text...");
    let sentence = document.getElementById("textInput").value;
    alert("You entered: " + sentence);
    let charCount = sentence.length;
    let wordCount = 0;
    let insideWord = false;
    let vowels = "aeiouAEIOU";
    let vowelCount = 0;

    wordCount = sentence.split(" ").length;

    for (let i = 0; i < sentence.length; i++) {
        let ch = sentence[i];
        if (vowels.indexOf(ch) !== -1) {
            vowelCount++;
        }
        if (ch !== " " && !insideWord) {
            insideWord = true;
        }
        else if (ch === " ") {
            insideWord = false;  
        }
    }
    document.getElementById("chars").innerText = charCount;
    document.getElementById("words").innerText = wordCount;
    document.getElementById("vowels").innerText = vowelCount;
}