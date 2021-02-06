class Spiral {
    constructor(width, height){
        this.width = width;
        this.height = height
        this.center = {
            x: this.width/2,
            y: this.height/2
        }
        this.datum = 0;
        this.offset = 0
        this.direction = 1
    }

    draw = p5 => {
        var step = 0.05;
        p5.stroke(255);
        p5.strokeWeight(5);
        p5.noFill();
        p5.beginShape()
        var start = 50 + this.offset
        var len = 20
        for(var i = start; i < len+start; i++){
            let radius = Math.pow(1.03, i);
            var x = this.center.x + radius * Math.cos(this.datum + i*step*p5.PI);
            var y = this.center.y + radius * Math.sin(this.datum + i*step*p5.PI);
            p5.curveVertex(x, y);
        }
        p5.endShape();
        this.offset += this.direction
        p5.frameRate(40)
        if(this.offset === 180){
            this.direction = -1
        } else if (this.offset === 1){
            this.direction = 1
        }
        console.log(this.offset, this.direction)
    }

    mouseClicked = p5 => {
    }

}

export default Spiral
