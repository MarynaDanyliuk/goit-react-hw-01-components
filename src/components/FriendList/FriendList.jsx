import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
// import friends from '/friends.json';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.name}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
