class Spiral {
    constructor(width, height){
        this.width = width;
        this.height = height
        this.center = {
            x: this.width/2,
            y: this.height/2
        }
        this.radius = 1;
        this.thickness = 5;
        this.edge = this.getEdge(this.center);
        this.circles = [];
    }

    draw = p5 => {
        const step = 3;
        let to_delete = [];
        this.circles.forEach((item, index) => {
            let diameter = item.radius * 2
            this.ring(p5, item.center.x, item.center.y, diameter)
            if (diameter < item.edge*2){
                item.radius += step;
            } else {
                to_delete.push(index);
            }
        });
        to_delete.forEach((item, index) => {
            this.circles.splice(item, 1);
        });
    }

    mouseClicked = p5 => {
        this.circles.push(this.newCircle(p5.mouseX, p5.mouseY))
    }

    getEdge = (center) => {
        const left = Math.pow(center.x, 2);
        const right = Math.pow(this.width - center.x, 2);
        const top = Math.pow(center.y, 2);
        const bottom = Math.pow(this.height - center.y, 2);
        const distances =  [
                left + top,
                left + bottom,
                right + bottom,
                right + top,
            ].map(x => Math.sqrt(x))

        return Math.max(...distances)
    }

    ring = (p5, x, y, radius, width) => {
        p5.noFill()
        p5.strokeWeight(this.thickness)
        p5.stroke(0, 255, 0)
        p5.circle(x, y, radius)
    }

    newCircle = (x, y) => {
        return {
            radius: 0,
            edge: this.getEdge({x:x,y:y}),
            center: {
                x: x,
                y: y
            }
        }
    }
}

export default Spiral
