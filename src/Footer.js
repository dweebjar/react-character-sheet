import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <footer>
                    <a href="https://dweebjar.github.io/dnd-soundboard/" target="_blank"><p>DnD Soundboard</p></a>
                    <div>
                        <a href="https://twitter.com/jakecrump" target="_blank"><i class="fab fa-twitter fa-lg"></i></a>
                        <a href="https://github.com/dweebjar" target="_blank"><i class="fab fa-github fa-lg"></i></a>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;