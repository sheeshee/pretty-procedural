import React, { Component } from 'react';
import './Menu.css'
import Circles from './engines/Circles'
import Spiral from './engines/Spiral'


export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    toggleMenu(){
        this.setState(state => ({
            active: !state.active
        }));
    }

    render() {
        return (
            <div className="Menu">
                <MenuIcon
                    handleClick={this.toggleMenu}
                    isActive={this.state.active}
                />
                <SideBar
                    handleClick={this.toggleMenu}
                    isActive={this.state.active}
                    setEngine={this.props.setEngine}
                    engine={this.props.engine}
                />
            </div>
        )
    }
}

class SideBar extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.setEngine = this.setEngine.bind(this)
    }

    handleClick(){
        this.props.handleClick()
    }

    setEngine(engine){
        this.props.setEngine(engine)
    }

    render(){
        var classes = "sidebar "
        if (this.props.isActive){
            classes += 'shown'
        } else {
            classes += 'hidden'
        }
        return (
            <div className={classes}>
                <button className="menuExit" onClick={this.handleClick}>X</button>
                <div className="appList">
                    <ul>
                        <li><MenuItem currentEngine={this.props.engine} engine={Circles} itemName="Circles" onClick={this.setEngine} /></li>
                        <li><MenuItem currentEngine={this.props.engine} engine={Spiral} itemName="Spiral" onClick={this.setEngine} /></li>
                    </ul>
                </div>
            </div>
        )
    }
}


class MenuItem extends Component {
    render(){
        var selectClass = "";
        if(this.props.currentEngine === this.props.engine){
            selectClass = "selected"
        }
        return(
        <button
            className={selectClass}
            onClick = {() => this.props.onClick(this.props.engine)}
            >
                {this.props.itemName}
        </button>
        )
    }
}

class MenuIcon extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.handleClick()
    }

    render() {
        var status;
        if (this.props.isActive){
            status = "hidden"
        } else {
            status = "shown"
        }
        return (
            <button className={"hamburger " + status} onClick={this.handleClick}>
                <div >
                    <div className="patty"></div>
                    <div className="patty"></div>
                    <div className="patty"></div>
                </div>
            </button>
        )
    }
}
