import React, {useState, useEffect} from 'react';
import MDSpinner from 'react-md-spinner';
import {CometChat} from '@cometchat-pro/chat';

const MESSAGE_LISTENER_KEY = 'listener-key';
const limit = 30;

const Chat = ({user}) => {
    const [friends, setFriends] = useState([]);
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [chat, setChat] = useState([]);
    const [chatIsLoading, setChatIsLoading] = useState(false);
    const [friendIsLoading, setFriendIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    

    useEffect(() => {
        let usersRequest = new CometChat.UsersRequestBuilder()
        .setLimit(limit)
        .build();
        usersRequest.fetchNext().then(
            userList => {
                console.log('User list received:', userList);
                setFriends(userList);
                setFriendIsLoading(false);
            },
            error => {
                const.log('User list fe failed with error:', error);
            }
        );

        return () => {
            CometChat.removeMessageListener(MESSAGE_LISTENER_KEY);
            CometChat.logout();
        };
        
    }, []);
};

export default Chat;
