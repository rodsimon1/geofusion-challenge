import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import JsonData from '../../data/data.json';
import { StyledPaginateContainer, TableContainer, RevenueColumn, SearchInput } from './StoresStyles';

const allStores = JsonData.stores;
console.log('All Stores', allStores);

const Stores = () => {
  const [stores, setStores] = useState(allStores);
  const [pageNumber, setPageNumber] = useState(0);
  const [minRevenue, setMinRevenue] = useState(15000);
  const [searchTerm, setSearchTerm] = useState('');

  // const revenueFormat = (number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);

  const storesPerpage = 10;
  const pagesVisited = pageNumber * storesPerpage;

  const displayStores = stores
    .filter((store) => {
      if (searchTerm === '') {
        return store;
      } else if (store.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
        return store;
      }
    })
    .slice(pagesVisited, pagesVisited + storesPerpage)
    .map((store, index) => {
      return (
        <tr key={index}>
          <td>{store.name}</td>
          <RevenueColumn minRevenue={minRevenue} storeRevenue={store.revenue}>
            {store.revenue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </RevenueColumn>
        </tr>
      );
    });

  const pageCount = Math.ceil(stores.length / storesPerpage);

  //                    destructured from 'event'
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <SearchInput type="text" placeholder="Filter for Stores" onChange={(e) => setSearchTerm(e.target.value)} />

      <TableContainer>
        <thead>
          <tr>
            <th>Store</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>{displayStores}</tbody>
      </TableContainer>
      <StyledPaginateContainer>
        <ReactPaginate
          previousLabel="< Previous"
          nextLabel="Next >"
          pageCount={pageCount}
          onPageChange={handlePageChange}
          breakLabel="..."
          breakClassName="break-me"
          containerClassName="pagination"
          activeClassName="active"
          previousLinkClassName="previousBtn"
          nextLinkClassName="nextBtn"
          disabledClassName="disabledBtn"
        />
      </StyledPaginateContainer>
    </div>
  );
};

export default Stores;
