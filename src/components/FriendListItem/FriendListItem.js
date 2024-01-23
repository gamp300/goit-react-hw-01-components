import PropTypes from 'prop-types';

import {
  FriendListItemContainer,
  StatusIndicator,
  Avatar,
  Name,
} from '../FriendList/FriendList.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendListItemContainer>
      <StatusIndicator isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48"></Avatar>
      <Name>{name}</Name>
    </FriendListItemContainer>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
