/*
// Write a prompt to accept 3 letters, text color (keyword or hexadecimal), list of shapes, shape color (keyword or hexa).

// Based on input from the prompt, SVG  file is created with named 'logo.svg'. Console log "Genererated logo.svg".

// Code reqs:
// OOP --> have a class for each shape, circle, triangle, rectangle
// Must have parent Class called shape -- common traits include text, shape text, shape color, height, width
// All classes must have a render method -- parent render should display that child render is not working
// From input instantiate a new class of the selected shape
// Use classes methods to update text, text color, shape color --> these methods should be in Shape class (parent)
// Use child class to have a specific method to make shape height, width, etc 
*/

// Import dependencies and Shape objects
const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Rectangle, Circle, Triangle, Ellipse, textCheck, colorCheck} = require('./Develop/lib/shapes.js');

// Define global variables
const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to 3 Characters: (default will be used if more than 3 chars are entered)'
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
 
/*
inquirer
    .prompt(questions)
    .then( (answers) => {
      const { text, textColor, shape, shapeColor } = answers;
      
      // Create different cases for whatever the user choose to create
      switch ( shape ) {
        case value:
          
          break;
      
        default:
          break;
      }      

    })
*/

let testShape = new Square("SVG", "white", "square", "black");
testShape.render()
