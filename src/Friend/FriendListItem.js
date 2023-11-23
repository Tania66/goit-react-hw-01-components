import css from './Friends.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={css.status}>
        {isOnline ? (
          <span className={css.online}></span>
        ) : (
          <span className={css.ofline}></span>
        )}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
