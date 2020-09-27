import React, { Component } from 'react';
import './Menu.css'

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
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
                />
            </div>
        )
    }
}

class SideBar extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.handleClick()
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
                        <li><button>Circles</button></li>
                        <li><button>Spiral</button></li>
                    </ul>
                </div>
            </div>
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
