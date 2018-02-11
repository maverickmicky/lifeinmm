import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">liFe in 'mm'</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="#" >Gallery</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <div id="slider">

                </div>
            </div>
        );
    }
}

NavbarToggler.propTypes = {
    type: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}