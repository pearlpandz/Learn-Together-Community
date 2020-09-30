import React from 'react'
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <Link to="/"><b>Learn Together Community</b></Link>
                    <ul>
                        <li>
                            <Link to="/join">Join with us</Link>
                        </li>
                        <li>
                            <a className="facebook" href="https://facebook.com/groups/learntogethercommunity" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a className="youtube" href="https://www.youtube.com/channel/UCim3zaJv9xDcvRcIcysZXEQ" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-youtube-play" aria-hidden="true"></i>
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Header;