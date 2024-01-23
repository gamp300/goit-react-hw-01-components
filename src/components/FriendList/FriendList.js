import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

import {
  FriendListContainer,
  FriendListContainerUl,
} from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendListContainer>
      <FriendListContainerUl>
        {friends.map(friend => (
          <FriendListItem key={friend.id} {...friend} />
        ))}
      </FriendListContainerUl>
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
