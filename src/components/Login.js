import React from 'react'
import {NotificationManager} from '@react-notifications';
import {cometchat} from '@cometchat-pro/chat'
import config from '../config';

const Login = (props) => {
    const [uidValue, setUidValue] = useState('');
    const [isSubmitting, setisSubmitting] = useState(false);

    return (
        ### Login to Awesome Chat
        
        <input
        type = 'text'
        name='username'
        className='form-control'
        placeholder='Your username'
        value={uidValue}
        onChange={event => setUidValue(event.target.value)}
        />

        <input
        type='submit'
        className='btn btn-primary btn-block'
        value={`${isSubmitting ? 'Loading...' : 'Login'}`}
        disabled={isSubmitting}
        />
        
    )
}

export default Login;
