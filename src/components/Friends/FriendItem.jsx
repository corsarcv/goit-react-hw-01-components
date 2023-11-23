import css from "./FriendItem.module.css";
import classNames from 'classnames';




export const FriendItem = ({avatar, name, isOnline}) => {
    return (
    <li className={css.item} >
        <span className={classNames(css.status, { 'online': isOnline }, {'offline': !isOnline})}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
)
}