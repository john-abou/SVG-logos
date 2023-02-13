// Import dependencies and Shape objects
const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Rectangle, Circle, Triangle, Ellipse, textCheck, colorCheck} = require('./develop/shapes.js');

// Define the questions to be used in the prompt
const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to 3 Characters for your logo: '
    },
    {
      type: 'input',
      name: 'textColor',
      message: `Enter a text color. A hexstring ("ffa500") or color keyword (blue) is valid: `
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What background shape would you like?',
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
      message: `Enter a color for the background shape. A hexstring ("ffa500") or color keyword (blue) is valid:`
    }
];
 
// Prompt the user for the questions
inquirer
    .prompt(questions)
    
    // use the answers to generate the SVG file
    .then( (answers) => {
      let { text, textColor, shape, shapeColor } = answers;
      shape = shape.toLowerCase();
      
      // Create different cases for whatever the user chooses to create
      switch ( shape ) {
        case "square":
          const squareSVG = new Square(text, textColor, shape, shapeColor);
          squareSVGCode = squareSVG.svg();
          console.log('creating SVG var worked.')
          squareSVG.render(shape, squareSVGCode)
          break;
        case "rectangle":
          const rectangleSVG = new Rectangle(text, textColor, shape, shapeColor);
          rectangleSVGCode = rectangleSVG.svg();
          rectangleSVG.render(shape, rectangleSVGCode);
          break;
        case "circle":
          const circleSVG = new Circle(text, textColor, shape, shapeColor);
          circleSVGCode = circleSVG.svg()
          circleSVG.render(shape, circleSVGCode);
          break;
        case "triangle":
          const triangleSVG = new Triangle(text, textColor, shape, shapeColor);
          triangleSVGCode = triangleSVG.svg();
          triangleSVG.render(shape, triangleSVGCode);
          break;
        case "ellipse":
          const ellipseSVG = new Ellipse(text, textColor, shape, shapeColor);
          ellipseSVGCode =ellipseSVG.svg();
          ellipseSVG.render(shape, ellipseSVGCode);
          break;
        }      
    })