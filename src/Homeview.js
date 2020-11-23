import React from 'react';
import { Switch, Route, NavLink } from "react-router-dom";

class Homeview extends React.Component {
    render() {
        return (
            <div id="container1">
                <h1>Tour Guide Kyria Sobrinho</h1>
                <nav>
                    <NavLink to="/aboutme"><button>About me</button></NavLink>
                    <NavLink to="/tour"><button>Tour</button></NavLink>
                    <NavLink to="/contact"><button>Contact</button></NavLink>
                    <NavLink to="/aboutme"><button>About me</button></NavLink>
                </nav>

            </div>
        )
    }
}

export default Homeview;