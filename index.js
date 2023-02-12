/* 
GIVEN a command-line application that accepts user input

WHEN I am prompted for text THEN I can enter up to three characters.
WHEN I am prompted for the text color THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts THEN an SVG file is created named `logo.svg`AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser THEN I am shown a 300x200 pixel image that matches the criteria I entered 

*/

// Write a prompt to accept 3 letters, text color (keyword or hexadecimal), list of shapes, shape color (keyword or hexa).

// Based on input from the prompt, SVG  file is created with named 'logo.svg'. Console log "Genererated logo.svg".

// Code reqs:
// OOP --> have a class for each shape, circle, triangle, rectangle
// Must have parent Class called shape -- common traits include text, shape text, shape color, height, width
// All classes must have a render method -- parent render should display that child render is not working
// From input instantiate a new class of the selected shape
// Use classes methods to update text, text color, shape color --> these methods should be in Shape class (parent)
// Use child class to have a specific method to make shape height, width, etc 

// Import dependencies and Shape objects
const inquirer = require('inquirer');
const fs = require('fs');
const { shape, square,} = shapes.js;

// Define global variables
const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to 3 Characters:'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a text color:'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like?',
      choices: [
        'Circle',
        'Square',
        'Rectangle',
        'Triangle',
        'Elipse'
      ]
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a shape color:'
    }
];
const hexRegex = /^([a-fA-F0-9]{6}||[a-fA-F0-9]{3})$/;
const colorKeywords = "AliceBlue,AntiqueWhite,Aqua,Aquamarine,Azure,Beige,Bisque,Black,BlanchedAlmond,Blue,BlueViolet,Brown,BurlyWood,CadetBlue,Chartreuse,Chocolate,Coral,CornflowerBlue,Cornsilk,Crimson,Cyan,DarkBlue,DarkCyan,DarkGoldenRod,DarkGrey,DarkGreen,DarkKhaki,DarkMagenta,DarkOliveGreen,Darkorange,DarkOrchid,DarkRed,DarkSalmon,DarkSeaGreen,DarkSlateBlue,DarkSlateGrey,DarkTurquoise,DarkViolet,DeepPink,DeepSkyBlue,DimGray,DodgerBlue,FireBrick,FloralWhite,ForestGreen,Fuchsia,Gainsboro,GhostWhite,Gold,GoldenRod,Grey,Green,GreenYellow,HoneyDew,HotPink,IndianRed,Indigo,Ivory,Khaki,Lavender,LavenderBlush,LawnGreen,LemonChiffon,LightBlue,LightCoral,LightCyan,LightGoldenRodYellow,LightGrey,LightGreen,LightPink,LightSalmon,LightSeaGreen,LightSkyBlue,LightSlateGrey,LightSteelBlue,LightYellow,Lime,LimeGreen,Linen,Magenta,Maroon,MediumAquaMarine,MediumBlue,MediumOrchid,MediumPurple,MediumSeaGreen,MediumSlateBlue,MediumSpringGreen,MediumTurquoise,MediumVioletRed,MidnightBlue,MintCream,MistyRose,Moccasin,NavajoWhite,Navy,OldLace,Olive,OliveDrab,Orange,OrangeRed,Orchid,PaleGoldenRod,PaleGreen,PaleTurquoise,PaleVioletRed,PapayaWhip,PeachPuff,Peru,Pink,Plum,PowderBlue,Purple,Red,RosyBrown,RoyalBlue,SaddleBrown,Salmon,SandyBrown,SeaGreen,SeaShell,Sienna,Silver,SkyBlue,SlateBlue,SlateGrey,Snow,SpringGreen,SteelBlue,Tan,Teal,Thistle,Tomato,Turquoise,Violet,Wheat,White,WhiteSmoke,Yellow,YellowGreen";

inquirer
    .prompt(questions)
    .then( (answers) => {
        const { text, textColor, shape, shapeColor } = answers;


    })
