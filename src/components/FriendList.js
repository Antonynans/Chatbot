const FriendList = props => {
    const {friends, friendisLoading, selectedFriend} = props;
    if (friendisLoading) {
      return (
  
  
  
      );
    } else {
      return (
  
          {friends.map(friend => (
            <li
              key={friend.uid}
              className={`list-group-item ${
                friend.uid === selectedFriend ? 'active' : ''
              }`}
              onClick={() => props.selectFriend(friend.uid)}>
              {friend.name}
  
          ))}
  
      );
    }
  };