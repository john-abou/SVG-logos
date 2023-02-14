// Create unit tests for each shape. 
const { Square, Rectangle, Circle, Triangle, Ellipse, textCheck, colorCheck} = require("../shapes");

// Create unit test for to ensure the Square render method is working correctly.
describe('Square', () => {
    test("Check if the Square Classes shape property assignment is working.", () => {
        const square = new Square();
        const expectedShape = 'rect x="55" y="10" width="190" height="190"'
        expect(square.shape).toEqual(expectedShape)
    })
    test("Check if the Square shapeColor property assignment is working.", () => {
        const square = new Square();
        const expectedShape = 'black' // Default color is black if no input is passed
        expect(square.shapeColor).toEqual(expectedShape)
    })
    test("Check if the Square textColor property assignment is working.", () => {
        const square = new Square();
        const expectedShape = 'white' // Default color is white if no input is passed
        expect(square.textColor).toEqual(expectedShape)
    })
    test("Check if the Square class throws an error when the text input is above 3 chars.", () => {
        cb = () => new Square("TextInput");
        err = new Error('Your input is greater than 3 characters. Try again.');

        expect( cb ).toThrowError(err);
    })
    test("Check if the Square class throws an error when an incorrect hex string is used.", () => {
        cb = () => new Square( "ABV", "abcggu"); //text, textColor, shape, shapeColor
        err = new Error('The color entered is not a hex string or html color. Try again.')

        expect( cb ).toThrowError(err);
    })
})

// Create unit test for to ensure the Rectangle render method is working correctly.
describe('Rectangle', () => {
    test("Check if the Rectangle Classes shape property assignment is working.", () => {
        const square = new Rectangle();
        const expectedShape = 'rect x="25" y="25" width="270" height="170"'
        expect(square.shape).toEqual(expectedShape)
    })
    test("Check if the Rectangle Classes shapeColor property assignment is working.", () => {
        const square = new Rectangle();
        const expectedShape = 'black' // Default color is black if no input is passed
        expect(square.shapeColor).toEqual(expectedShape)
    })
    test("Check if the Rectangle Classes textColor property assignment is working.", () => {
        const square = new Rectangle();
        const expectedShape = 'white' // Default color is white if no input is passed
        expect(square.textColor).toEqual(expectedShape)
    })
    test("Check if the Rectangle class throws an error when the text input is above 3 chars.", () => {
        cb = () => new Rectangle("TextInput");
        err = new Error('Your input is greater than 3 characters. Try again.');

        expect( cb ).toThrowError(err);
    })
    test("Check if the Rectangle class throws an error when an incorrect hex string is used.", () => {
        cb = () => new Rectangle( "ABV", "abcggu"); //text, textColor, shape, shapeColor
        err = new Error('The color entered is not a hex string or html color. Try again.')

        expect( cb ).toThrowError(err);
    })
})

// Create unit test for to ensure the Circle render method is working correctly.
describe('Circle', () => {
    test("Check if the Circle classes shape property assignment is working.", () => {
        const square = new Circle();
        const expectedShape = 'circle cx="150" cy="100" r="90" fill="red"'
        expect(square.shape).toEqual(expectedShape)
    })
    test("Check if the Circle classes shapeColor property assignment is working.", () => {
        const square = new Circle();
        const expectedShape = 'black' // Default color is black if no input is passed
        expect(square.shapeColor).toEqual(expectedShape)
    })
    test("Check if the Circle classes textColor property assignment is working.", () => {
        const square = new Circle();
        const expectedShape = 'white' // Default color is white if no input is passed
        expect(square.textColor).toEqual(expectedShape)
    })
    test("Check if the Circle class throws an error when the text input is above 3 chars.", () => {
        cb = () => new Circle("TextInput");
        err = new Error('Your input is greater than 3 characters. Try again.');

        expect( cb ).toThrowError(err);
    })
    test("Check if the Circle class throws an error when an incorrect hex string is used.", () => {
        cb = () => new Circle( "ABV", "abcggu"); //text, textColor, shape, shapeColor
        err = new Error('The color entered is not a hex string or html color. Try again.')

        expect( cb ).toThrowError(err);
    })
})

// Create unit test for to ensure the Triangle render method is working correctly.
describe('Triangle', () => {
    test("Check if the Triangle classes shape property assignment is working.", () => {
        const square = new Triangle();
        const expectedShape = 'polygon points="150,10 290,190 10,190"';
        expect(square.shape).toEqual(expectedShape)
    })
    test("Check if the Triangle classes shapeColor property assignment is working.", () => {
        const square = new Triangle();
        const expectedShape = 'black' // Default color is black if no input is passed
        expect(square.shapeColor).toEqual(expectedShape)
    })
    test("Check if the Triangle classes textColor property assignment is working.", () => {
        const square = new Triangle();
        const expectedShape = 'white' // Default color is white if no input is passed
        expect(square.textColor).toEqual(expectedShape)
    })
    test("Check if the Triangle class throws an error when the text input is above 3 chars.", () => {
        cb = () => new Triangle("TextInput");
        err = new Error('Your input is greater than 3 characters. Try again.');

        expect( cb ).toThrowError(err);
    })
    test("Check if the Triangle class throws an error when an incorrect hex string is used.", () => {
        cb = () => new Triangle( "ABV", "abcggu"); //text, textColor, shape, shapeColor
        err = new Error('The color entered is not a hex string or html color. Try again.')

        expect( cb ).toThrowError(err);
    })
})

// Create unit test for to ensure the Ellipse render method is working correctly.
describe('Ellipse', () => {
    test("Check if the Ellipse classes shape property assignment is working.", () => {
        const square = new Ellipse();
        const expectedShape = 'ellipse cx="150" cy="100" rx="125" ry="75"'
        expect(square.shape).toEqual(expectedShape)
    })
    test("Check if the Ellipse classes shapeColor property assignment is working.", () => {
        const square = new Ellipse();
        const expectedShape = 'black' // Default color is black if no input is passed
        expect(square.shapeColor).toEqual(expectedShape)
    })
    test("Check if the Ellipse classes textColor property assignment is working.", () => {
        const square = new Ellipse();
        const expectedShape = 'white' // Default color is white if no input is passed
        expect(square.textColor).toEqual(expectedShape)
    })
    test("Check if the Ellipse class throws an error when the text input is above 3 chars.", () => {
        cb = () => new Ellipse("TextInput");
        err = new Error('Your input is greater than 3 characters. Try again.');

        expect( cb ).toThrowError(err);
    })
    test("Check if the Ellipse class throws an error when an incorrect hex string is used.", () => {
        cb = () => new Ellipse( "ABV", "abcggu"); //text, textColor, shape, shapeColor
        err = new Error('The color entered is not a hex string or html color. Try again.')

        expect( cb ).toThrowError(err);
    })
})


