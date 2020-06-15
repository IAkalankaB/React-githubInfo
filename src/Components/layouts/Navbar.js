import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Home from '/home/isuru/my-app/src/Components/pages/Home.js';


class navbar extends Component {

    render() {
        return (
            <nav className = 'navbar bg-primary'>
                <h1>
                    <Link to='/'>
                        github.info
                    </Link>
                </h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>    
                    </li>
                    <li>
                        <Link to='/about'>About</Link>    
                    </li>
                </ul>              
            </nav>
        )
    }
}

export default navbar
