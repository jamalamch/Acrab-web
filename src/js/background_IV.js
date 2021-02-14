let itter = 20
let step
let offset
let strokeOffsetMin = 1
let strokeOffsetMax = 60

let Bcolor
let Ccolor

let xoff = 0

let lines = []

function setup() {
    pixelDensity(2)

    var canvasDiv = document.getElementById('backgroundP5');

    var Height = canvasDiv.clientHeight;
    var Width = canvasDiv.clientWidth;

    var canvas = createCanvas(Width, Height);

    canvas.parent('backgroundP5')
    canvas.id('sketch-container')

    Bcolor = color('#8db4db')
    Ccolor = color('#003da0')

    step = width / (itter - 1)
    offset = step / 2
    frameRate(30);
    init()
}

function init() {
    for (let x = 0; x < itter; x++) {
        let width = random(strokeOffsetMin, strokeOffsetMax)
        let offsetX = random(-offset, offset)
        let lX = x * step + offsetX
        let lin = gline(lX, 0, width, height)
        lines.push(lin)
    }
    console.log(lines)
}

function draw() {
    background(Ccolor)
    xoff = xoff + .01;
    lines.forEach(element => {
        element.draw()
        element.move(xoff)
    });
}

function windowResized() {
    var canvasDiv = document.getElementById('backgroundP5')
    var Height = canvasDiv.clientHeight
    var Width = canvasDiv.clientWidth


    resizeCanvas(Width, Height)
}

function gline(x, y, width, height) {
    if( typeof gline.counter == 'undefined' ) {
        gline.counter = 0;
    }
    gline.counter ++;
    var lin = {
        index : gline.counter,
        x : x,
        y : y,
        width : width,
        height : height,
        step : 0
    }
    lin.draw = function() {
        stroke(Bcolor)
        strokeWeight(this.width)
        line(this.x + this.step, this.y, this.x + this.step, this.y + this.height)
    }
    lin.move = function(xoff) {
        noiseSeed(this.index)
        this.step = noise(xoff) * windowWidth/5
    }
    return lin;
}
