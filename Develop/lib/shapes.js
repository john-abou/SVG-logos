
class Shapes {
    constructor(text = "", textColor="blue", shape="circls", shapeColor="lightgreen") {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    render() {
        console.log("The child classes render method is not working.")
    }

    renderShape() {
    }


}