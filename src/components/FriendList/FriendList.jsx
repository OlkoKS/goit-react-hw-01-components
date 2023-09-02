import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <ul className={css['friend-list']}>
            {friends.map(FriendListItem)}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array,
}