class Circles {
    constructor(width, height){
        this.width = width;
        this.height = height
        this.center = {
            x: this.width/2,
            y: this.height/2
        }
        this.radius = 1;
        this.thickness = 5;
        this.edge = 0.5*Math.sqrt(width*width + height * height) + this.thickness
    }

    draw = p5 => {
        console.log('draw')
        const step = 3;
        const diameter = this.radius * 2
        this.ring(p5, this.center.x, this.center.y, diameter, this.thickness)
        if (diameter < this.edge*2){
            this.radius += step;
        } else {
            this.radius = 1
        }
    }

    mouseClicked = p5 => {
        this.updateCenter(p5.mouseX, p5.mouseY)
        this.updateEdge()
        this.radius = 0
    }

    updateCenter = (x, y) => {
        this.center.x = x
        this.center.y = y
    }

    updateEdge = () => {
        const left = Math.pow(this.center.x, 2);
        const right = Math.pow(this.width - this.center.x, 2);
        const top = Math.pow(this.center.y, 2);
        const bottom = Math.pow(this.height - this.center.y, 2);
        const distances =  [
                left + top,
                left + bottom,
                right + bottom,
                right + top,
            ].map(x => Math.sqrt(x))

        this.edge = Math.max(...distances)
    }

    ring = (p5, x, y, radius, width) => {
        p5.fill(255)
        p5.circle(x, y, radius)
        p5.fill(0)
        p5.circle(x, y, radius - width)
    }
}

export default Circles
