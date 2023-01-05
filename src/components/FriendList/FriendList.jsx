import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => (
        <FriendListItem key={friend.name} />
        // <li key={friend.name}>{friend.name}</li>
      ))}
      {/* <!-- Довільна кіл-сть FriendListItem --> */}
    </ul>
  );
};

// FriendList.propTypes = {
//   friends: PropTypes.shape({
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//     id: PropTypes.number.isRequired,
//   }),
// };
