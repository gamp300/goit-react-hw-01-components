import styled from 'styled-components';

const getRandomColor = index => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const StatisticsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  text-align: center;
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  color: white;
`;

export const StatItem = styled.li`
  text-align: center;
  width: 50px;
  display: flex;
  flex-direction: column;
  padding: 15px;

  background-color: ${props => getRandomColor(props.index)};
`;

export const Label = styled.span`
  font-size: 16px;
`;

export const Percentage = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: white;
  margin-top: 5px;
`;
