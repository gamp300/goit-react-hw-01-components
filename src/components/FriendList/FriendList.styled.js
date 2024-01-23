import styled from 'styled-components';

export const FriendListContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  margin: 0 auto;
`;

export const FriendListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 25px 100px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FriendListContainerUl = styled.ul`
  padding: 0;
`;

export const StatusIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${Friend => (Friend.isOnline ? 'green' : 'red')};
  margin-right: 10px;
  margin: auto;
`;

export const Avatar = styled.img`
  width: 66px;
  height: 66px;
  margin: auto;
`;

export const Name = styled.p`
  font-size: 20px;
  padding: 0 20px;
  margin-left: 10px;
  margin: auto;
`;
