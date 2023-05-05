let TEXT_RATIO = 1/12

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function parseQuotes(quotes) {
    setText(quotes[randomInt(quotes.length)])
}

function setText(text) {
    if (text == "/Images/charlie.png") {
        let image = document.getElementById("image")
        image.src = text
        return
    }

    let display = document.getElementById("display");
    display.innerHTML = text;

    // Calculate font size for given string
    let bubble = document.getElementById("bubble");
    let bubbleArea = bubble.offsetWidth * bubble.offsetHeight;
    let textArea = bubbleArea * TEXT_RATIO;
    let size = Math.sqrt(textArea / text.length);

    display.style.fontSize = String(size * 20) + "%"
    console.log(size * 20)
}


fetch("/Scripts/quotes.json")
    .then((response) => response.json())
    .then((json) => parseQuotes(json["quotes"]));
