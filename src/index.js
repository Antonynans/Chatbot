import React from 'react';
import ReactDOM from 'react-dom';
import {CometChat} from '@cometchat-pro/chat';
import App from './App';
import config from './config';
// import { CometChat } from '@cometchat-pro/chat';

CometChat.init(config.appID);

ReactDOM.render( document.getElementById('root')
);
