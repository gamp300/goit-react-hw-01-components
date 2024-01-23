import styled from 'styled-components';

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
  list-style: none;
  padding: 0;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const StatItem = styled.li`
  text-align: center;
  border: 1px solid red;
  width: 50px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin: 9px;

  &:last-child {
    border-bottom: none;
  }
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const Percentage = styled.span`
  font-size: 16px;
  color: #4caf50;
  margin-top: 5px;
`;
