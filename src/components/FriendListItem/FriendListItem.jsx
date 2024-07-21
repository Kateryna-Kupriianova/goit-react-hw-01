import css from "./FriendListItem.module.css"
import clsx from "clsx";
const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <div className={css.friendItem}>
        <img className={css.imageAvatar} src={avatar} alt={name}/>
          <p className={css.friendName}>{name}</p>
        <p className={clsx(css.statsFriend, { [css.isOnline] : isOnline })}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    )
}

export default FriendListItem;