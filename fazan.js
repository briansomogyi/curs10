class Button {
    #x;
    #y;
    #w;
    #h;
    #text;
    #color;

    constructor(x, y, w, h, text, color) {
        this.#x = x;
        this.#y = y;
        this.#w = w;
        this.#h = h;
        this.#text = text;
        this.#color = color;
    }

    draw() {
        fill(this.#color);
        rect(this.#x, this.#y, this.#w, this.#h);
        fill("black");
        textSize(30);
        text(this.#text, this.#x + 8, this.#y + 35);

    }

    click(letter) {
        if (mouseX >= this.#x &&
            mouseX <= this.#x + this.#w &&
            mouseY >= this.#y &&
            mouseY <= this.#y + this.#h) {
            // console.log(`${this.#text} button was clicked.`);
            letter.startCounting();
        }
    }

}
class Letter {
    #letter;
    #speed;
    #color;
    #x;
    #y;
    #idInterval;

    constructor(letter, speed, color, x, y) {
        this.#letter = letter;
        this.#speed = speed;
        this.#color = color;
        this.#x = x;
        this.#y = y;
    }

    draw() {
        fill(this.#color);
        textSize(50);
        text(this.#letter, this.#x, this.#y);
    }

    startCounting() {
        this.#idInterval = setInterval(this.nextLetter, this.#speed, this);
    }

    stopCounting() {
        clearInterval(this.#idInterval);
    }

    nextLetter(letter) {
        let letterCode = letter.#letter.charCodeAt() + 1;
        if (letterCode > "Z".charCodeAt()) {
            letterCode = "A".charCodeAt();
        }
        letter.#letter = String.fromCharCode(letterCode);
    }
}