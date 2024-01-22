import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

import { FriendListContainer } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendListContainer>
      <ul className="friend-list">
        {friends.map(friend => (
          <FriendListItem key={friend.id} {...friend} />
        ))}
      </ul>
    </FriendListContainer>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
