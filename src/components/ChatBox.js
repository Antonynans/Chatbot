const ChatBox = props => {
    const {chat, chatIsLoading, user} = props;
    if (chatIsLoading) {
      return (
  
  
  
      );
    } else {
      return (
  
          {chat.map(chat => (
  
              <div
                className={`${
                  chat.receiver !== user.uid ? 'balon1' : 'balon2'
                } p-3 m-1`}>
                {chat.text}
  
  
          ))}
  
  
      );
    }
  };
  
  