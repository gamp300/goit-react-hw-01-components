import styled from 'styled-components';

export const TransactionHistoryStyled = styled.table`
  width: 700px;
  margin: 50px auto;

  th {
    background-color: #33cc33; /* verde */
    color: #fff;
    text-align: center;
    padding: 10px;
  }

  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    text-align: center;
  }

  .even-row {
    background-color: #f2f2f2; /* gris */
  }

  .odd-row {
    background-color: #fff;
  }

  .green-title {
    background-color: #33cc33; /* verde */
    color: #fff;
  }
`;

export default TransactionHistoryStyled;
