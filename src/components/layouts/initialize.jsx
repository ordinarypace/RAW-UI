'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation/navigation';
import Visualize from './visualize/visualize';

let header = document.getElementById('raw-header'),
    aside = document.getElementById('raw-aside'),
    visualize = document.getElementById('raw-visualize');

// navigation mount
ReactDOM.render(<Navigation data={[
    {
        content : '테스트',
        href : 'http://naver.com',
        className : 'test',
        target : '_blank',
        data : 'aaaaaaa'
    },
    {
        content : '테스트',
        href : 'http://naver.com',
        className : 'test',
        target : '_blank',
        data : 'aaaaaaa'
    },
    {
        content : '테스트',
        href : 'http://naver.com',
        className : 'test',
        target : '_blank',
        data : 'aaaaaaa'
    }
]} />, header);


// visual section mount
ReactDOM.render(<Visualize data={{
    url : '',
    width : '',
    height : '',
    title : ''
}} />,  visualize);