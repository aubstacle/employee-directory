import React, { Component } from "react";

class Header extends Component {

    render() {
        return (
            <nav className="text-center">
                <h3 onClick={this.props.handleHeaderClick}>
                    Employee Directory
                </h3>
                <h5>
                    Search or Sort by First Name!
                </h5>
            </nav>
        )
    }
}

export default Header;