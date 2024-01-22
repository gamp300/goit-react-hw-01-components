import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;

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
  color: #4caf50; /* Green color for percentage, adjust as needed */
`;
