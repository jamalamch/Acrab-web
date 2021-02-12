let itter = 20
let step
let offset
let strokeOffsetMin = 1
let strokeOffsetMax = 40

let Bcolor
let Ccolor

let lines = []

function gline(x, y, width, height) {
    var lin = {
        x : x,
        y : y,
        width : width,
        height : height
    }
    lin.draw = function() {
        line(this.x, this.y, this.width, this.height)
    }
    return lin;
}
function setup() {
    pixelDensity(2)

    var canvasDiv = document.getElementById('backgroundP5');
    var Height = canvasDiv.clientHeight;

    var canvas = createCanvas(windowWidth, Height)
    canvas.parent('backgroundP5')
    canvas.id('sketch-container')

    Bcolor = color('#8db4db')
    Ccolor = color('#003da0')

    step = width / (itter - 1)
    offset = step / 2
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
    lines.forEach(element => {
        element.draw()
    });
}

function windowResized() {
    var canvasDiv = document.getElementById('backgroundP5');
    var Height = canvasDiv.clientHeight;

    resizeCanvas(windowWidth, Height);
}
