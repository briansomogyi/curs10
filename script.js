const buttonStart = new Button(200, 300, 40, 20, "Start", "green");
const buttonStop = new Button(300, 300, 40, 20, "Stop", "red");
const letter = new Letter("A", 200, "red", 100, 300);

function setup() {
    createCanvas(400, 400);
}

function draw() {
    clear();
    background(220);
    buttonStart.draw();
    buttonStop.draw();
    letter.draw();
}

function mouseClicked() {
    buttonStart.click(letter);
    buttonStop.click(letter);
}