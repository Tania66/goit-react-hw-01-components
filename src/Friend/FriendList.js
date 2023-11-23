import css from './Friends.module.css';
import FriendListItem from './FriendListItem'


export default function FriendList({friends}){
return(
    <div className={css.friend}>
<ul className={css.friendList}>
   {friends.map(friend =>(
    <FriendListItem key={friend.id}
    name={friend.name}
    avatar={friend.avatar}
    isOnline={friend.isOnline}/>
   ))}
</ul>
</div>
)
}