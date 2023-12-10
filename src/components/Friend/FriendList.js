import { Container, List } from './Friend.styled';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <Container>
      <List>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        ))}
      </List>
    </Container>
  );
}
