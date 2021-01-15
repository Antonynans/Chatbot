import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-notifications/lib/notifications.css';
import './App.css';
import { NotificationContainer } from 'react-notifications';
import Login from './components/Login';
import Chat from './components/Chat';

const App = () => {
    const [ user, setUser ] = useState(null);
    const renderApp = () => {
        // Render Chat component when user state is  not null
        if (user) {
            return ;
        } else {
            return ;
        }
    };
    return (
        
        {renderApp()}

    );
};

export default App;