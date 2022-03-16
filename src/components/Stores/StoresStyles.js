import styled from 'styled-components';

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StoresAndMapContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: center;

  th {
    background-color: #0080b2;
    color: white;
    cursor: pointer;
  }

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
    /* border: 1px solid red; */
    color: #0080b2;
    width: 100%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-items: center;
    align-items: center;

    a {
      cursor: pointer;
      padding: 10px;
      margin: 8px;
      border-radius: 10px;
      border: 1px solid black;
      color: black;

      &:hover {
        color: white;
        background-color: #0080b2;
      }
    }
  }

  .active a {
    color: white;
    background-color: #0080b2;
  }

  .break-me {
    cursor: default;
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  margin: 20px 0;
  width: 30%;
  font-size: 20px;
  box-sizing: border-box;
  /* background-image: url('../../images/search.svg');
  background-repeat: no-repeat; */
  background-color: #f0f8ff;

  &:focus {
    outline: none;
    background-color: #f5f5dc;
  }
`;

export const MinRevenueForm = styled.form`
  width: 30%;

  input {
    background-color: #f0f8ff;
    font-size: 20px;
    padding: 10px;
    margin: 20px 0;
    width: 100%;

    &:focus {
      outline: none;
      background-color: #f5f5dc;
    }
  }
`;
