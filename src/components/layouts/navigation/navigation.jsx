'use strict';

import React, { Component } from 'react';

export default class Navigation extends Component{
    constructor(data){
        super(data);
        this.state = data;
    }

    render(){
        const nodes = this.state.data.map((k, v) =>{
            return (
                <a href={k.href} className={k.className} data-custom={k.data} target={k.target}
                   key={'nav' + v}>
                    {k.content}
                </a>
            );
        });

        return(
            <nav className="raw-navigation">
                {nodes}
            </nav>
        );
    }
}
