import React, { Component } from 'react';
import './posts.css';

import Card from './card/card.js';



class Post extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="page-data">
            <div className="container">
                <h1>Weekend Collaboration</h1>
                <Card />
            </div>
        </div>
    }

}

export default Post;