import css from "./FriendItem.module.css";

import { FriendItem } from "./FriendItem";

export const FriendList = ({friends}) => 
    (<ul className={css["friend-list"]}>
        {friends.map(friend =>(
            <FriendItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                key={friend.id}
            >
            </FriendItem>
        ))}
    </ul>
)
