import { Item, Online, Ofline } from './Friend.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item>
      <span>{isOnline ? <Online></Online> : <Ofline></Ofline>}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
}
