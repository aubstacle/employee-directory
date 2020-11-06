import React, { Component } from "react";
import "./Header.css"


class Header extends Component {

    render() {
        return (
            <nav className="text-center">
                <h3 className="header" onClick={this.props.handleHeaderClick}>
                    Employee Directory
                </h3>
                <h5 className="header">
                    Search or Sort by First Name!
                </h5>
            </nav>
        )
    }
}

export default Header;