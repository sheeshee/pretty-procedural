import React, { Component } from 'react';
import Sketch from 'react-p5';
import Circles from './Circles'

export default class Canvas extends Component {
    constructor (props) {
        super(props)
        this.art = new Circles(this.props.width, this.props.height)
    }

    setup = (p5, canvasParentRef) => {
        p5.createCanvas(this.props.width, this.props.height).parent(canvasParentRef)
        p5.background(0);
    };

    draw = (p5) => {
        p5.background(0, 0, 0)
        this.art.draw(p5);
    }

    mouseClicked = (p5) => {
        this.art.mouseClicked(p5)
    }

    render () {
        return (
            <Sketch 
                setup={this.setup}
                draw={this.draw}
                mouseClicked={this.mouseClicked}
            />
        )
    }
}
