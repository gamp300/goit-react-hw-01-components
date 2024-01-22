import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50%;
  margin-bottom: 5px;
  padding: 10px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const Tag = styled.p`
  margin: 5px 0;
`;

export const Location = styled.p`
  margin: 0;
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

export const StatItem = styled.li`
  text-align: center;
`;

export const Label = styled.span`
  display: block;
  font-size: 14px;
  color: #555;
`;

export const Quantity = styled.span`
  display: block;
  font-size: 16px;
  font-weight: bold;
`;
