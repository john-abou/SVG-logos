// Must have parent Class called shape -- common traits include text, text color, shape color, height, width
const fs = require('fs');

const hexRegex = /^([a-fA-F0-9]{6}||[a-fA-F0-9]{3})$/;
const colorKeywords = "AliceBlue,AntiqueWhite,Aqua,Aquamarine,Azure,Beige,Bisque,Black,BlanchedAlmond,Blue,BlueViolet,Brown,BurlyWood,CadetBlue,Chartreuse,Chocolate,Coral,CornflowerBlue,Cornsilk,Crimson,Cyan,DarkBlue,DarkCyan,DarkGoldenRod,DarkGrey,DarkGreen,DarkKhaki,DarkMagenta,DarkOliveGreen,Darkorange,DarkOrchid,DarkRed,DarkSalmon,DarkSeaGreen,DarkSlateBlue,DarkSlateGrey,DarkTurquoise,DarkViolet,DeepPink,DeepSkyBlue,DimGray,DodgerBlue,FireBrick,FloralWhite,ForestGreen,Fuchsia,Gainsboro,GhostWhite,Gold,GoldenRod,Grey,Green,GreenYellow,HoneyDew,HotPink,IndianRed,Indigo,Ivory,Khaki,Lavender,LavenderBlush,LawnGreen,LemonChiffon,LightBlue,LightCoral,LightCyan,LightGoldenRodYellow,LightGrey,LightGreen,LightPink,LightSalmon,LightSeaGreen,LightSkyBlue,LightSlateGrey,LightSteelBlue,LightYellow,Lime,LimeGreen,Linen,Magenta,Maroon,MediumAquaMarine,MediumBlue,MediumOrchid,MediumPurple,MediumSeaGreen,MediumSlateBlue,MediumSpringGreen,MediumTurquoise,MediumVioletRed,MidnightBlue,MintCream,MistyRose,Moccasin,NavajoWhite,Navy,OldLace,Olive,OliveDrab,Orange,OrangeRed,Orchid,PaleGoldenRod,PaleGreen,PaleTurquoise,PaleVioletRed,PapayaWhip,PeachPuff,Peru,Pink,Plum,PowderBlue,Purple,Red,RosyBrown,RoyalBlue,SaddleBrown,Salmon,SandyBrown,SeaGreen,SeaShell,Sienna,Silver,SkyBlue,SlateBlue,SlateGrey,Snow,SpringGreen,SteelBlue,Tan,Teal,Thistle,Tomato,Turquoise,Violet,Wheat,White,WhiteSmoke,Yellow,YellowGreen";
colorKeywordsLower = colorKeywords.toLowerCase();

class Shape {
    constructor(text="SVG", textColor="white", shape="", shapeColor="black") {
        this.text = textCheck(text);
        this.textColor = colorCheck(textColor);
        this.shape = shape;
        this.shapeColor = colorCheck(shapeColor);
    }

    svg() {
        let SVG = `
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
        
        <text x="50%" y="50%" style="font-size: 32px;  text-align:center;" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">
        ${this.text}
        </text>
        </svg>
        
    </body>
    </html>
    `
    return SVG;
    }

    render(shapeInput, htmlVar) {
        fs.writeFile(`./examples/${shapeInput}.svg`, htmlVar, (err) => err ? console.log(`${shapeInput} SVG generated`) : console.error(err))
    }

    updateTextColor( updatedColor ) {
        this.textColor = colorCheck(updatedColor);
        console.log("Rerun the render method to see the changes!")
    }

    updateText( updatedText ) {
        this.text = textCheck(updatedText);
        console.log("Rerun the render method to see the changes!")
    }

    updateShapeColor( updatedColor ) {
        this.shapeColor = colorCheck(updatedColor);
        console.log("Rerun the render method to see the changes!")
    }
}

// Create all the child classes of the shape class
class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
        this.shape = 'rect x="55" y="10" width="190" height="190"';
    }
}
class Rectangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
        this.shape = 'rect x="25" y="25" width="270" height="170"';
    }
}
class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
        this.shape = 'circle cx="150" cy="100" r="90" fill="red"';
    }
}
class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
        this.shape = 'polygon points="150,10 290,190 10,190"';
    }
}
class Ellipse extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
        this.shape = 'ellipse cx="150" cy="100" rx="125" ry="75"';
    }
}

// Create a function to test that the text is 3 letters
function textCheck( textInput ) {
    if (textInput.length > 3) {
      throw new Error('Your input is greater than 3 characters. Try again.')
    } else {
      return textInput;
    }
}
  
// Create a function to test that the color entered is a hexcode or color
function colorCheck( color ) {
    if (colorKeywordsLower.includes( color.toLowerCase() ) || hexRegex.test(color)) {
        if (hexRegex.test(color)) {
            color = "#" + color;
            return color;
        }
        return color;
    } else {
        throw new Error('The color entered is not a hex string or html color. Try again.')
    }
}

// Export the classes and functions used in the classes
module.exports = {Square, Rectangle, Circle, Triangle, Ellipse, textCheck, colorCheck}