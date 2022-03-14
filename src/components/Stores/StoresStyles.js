import styled from 'styled-components';

export const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: center;

  th {
    background-color: #0080b2;
    color: white;
  }

  /* td {
    color: ${(props) => (props.minRevenue < props.storeRevenue ? 'blue' : 'red')};
  } */

  th,
  td {
    margin: 10px;
    padding: 10px 30px;
    border: 1px solid black;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

export const RevenueColumn = styled.td`
  color: ${(props) => (props.minRevenue < props.storeRevenue ? 'black' : 'red')};
`;

export const StyledPaginateContainer = styled.div`
  .pagination {
    color: #0366d6;
    width: 100%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;

    a {
      cursor: pointer;
      padding: 10px;
      margin: 8px;
      border-radius: 10px;
      border: 1px solid #0366d6;
      color: #0366d6;

      &:hover {
        color: white;
        background-color: #0366d6;
      }
    }
  }

  .active a {
    color: white;
    background-color: #0366d6;
  }

  .break-me {
    cursor: default;
  }
`;
