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
