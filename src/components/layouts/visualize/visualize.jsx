'use strict';

import React, { Component } from 'react';

export default class Visualize extends Component{
    constructor(data){
        super(data);
        this.state = data;
    }

    render(){
        return(
            <div className="raw-visualize">
                <img src={this.state.url} width={this.state.width} height={this.state.height} alt={this.state.title} />
            </div>
        );
    }
}
