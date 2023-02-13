// Must have parent Class called shape -- common traits include text, text color, shape color, height, width
const fs = require('fs');

class Shape {
    constructor(text="SVG", textColor="white", shape="", shapeColor="black") {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    render() {
        let svgHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SVG Logo Generator</title>
    </head>
    <body>

        <svg xmlns="http://www.w3.org/2000/svg" height="200" width="300" style="text-align: center;">
        <!-- rectangle -->
        <${this.shape} style="fill:${this.shapeColor}" />
        
        <text x="50%" y="50%" style="font-size: 32px;  text-align:center;" text-anchor="middle" alignment-baseline="middle" fill=${this.textColor}>
        ${this.text}
        </text>
        </svg>
        
    </body>
    </html>
    `
        fs.writeFile('square.html', svgHTML, (err) => err ? console.log('Square SVG generated') : console.error(err))
    }
}

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = 'rect x="55" y="10" width="190" height="190"';
    }
}


module.exports = {Shape, Square}

/*
    html = `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300" style="text-align: center;">
    <!-- rectangle -->
    <ellipse cx="150" cy="100" rx="125" ry="75" style="fill:${shapeColor};stroke:purple;stroke-width:2" />

    <text x="50%" y="50%" style="font-size: 32px;  text-align:center;" text-anchor="middle" alignment-baseline="middle" fill=${textColor}>
    ${text}
    </text>
    </svg>`;

    <rect x="25" y="25" width="270" height="170" fill="black"/> 
    <rect x="55" y="10" width="190" height="190" fill="black"/> 
    <circle cx="150" cy="100" r="90" fill="red" stroke="black" stroke-width="1" />
    <polygon points="150,10 290,190 10,190" style="fill:lime;stroke:purple;stroke-width:1" />
    <ellipse cx="150" cy="100" rx="125" ry="75" style="fill:yellow;stroke:purple;stroke-width:2" />
*/