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

    return (
        
        ## Friend List

        <div className='row ml-0 h-75 bg-white border rounded'
        style={{height: '100%', oerflow: 'auto'}}>
        <FriendList
            friends={friends}
            friendIsLoading={friendIsLoading}
            selectedFriend={selectedFriend}
            selectFriend={selectFriend}  
            />  

        ## Who you gonna chat with?

        <div className='row pt-5 bg-white'
        style={{heigt: 530, overflow: 'auto'}}>
        <ChatBox
            chat={chat}
            chatIsLoading={chatIsLoading}
            user={user}
        />

        <input
            id='text'
            className='mw-100 border rounded form-control'
            type='text'
            onChange={event => {
                setMessage(event.target.value)
            }}
            value={message}
            placeholder='Type a message...'
        />
        
        <button
            className='btn btn-outline-secondary rounded border w-100'
            title='Send'
            style={{paddingRight: 16}}>
            Send    
    )
};

export default Chat;
