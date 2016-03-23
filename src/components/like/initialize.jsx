'use strict';

import React, { Component } from 'react';

export default class Like extends Component{
    constructor(data){
        super(data);
        this.state = [];
    }

    componentDidMount(){
        $.ajax({
            method : 'GET',
            url : '/API/like',
            dataType : 'json',
            data : {},
            success : function(data){
                this.setState(data);
            }.bind(this),
            error : function(xhr){
                console.log(xhr);
            }
        });
    }

    render(){
        return(
            <button className="raw-like" data-value={this.state}></button>
        );
    }
}