import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import JsonData from '../../data/data.json';
import Map from '../Map/Map';
import {
  StyledPaginateContainer,
  TableContainer,
  RevenueColumn,
  SearchInput,
  MinRevenueForm,
  InputsContainer,
  StoresAndMapContainer,
} from './StoresStyles';

const allStores = JsonData.stores;
console.log('All Stores', allStores);

const Stores = () => {
  const [stores, setStores] = useState(allStores);
  const [pageNumber, setPageNumber] = useState(0);
  const [minRevenue, setMinRevenue] = useState(15000);
  const [searchTerm, setSearchTerm] = useState('');

  // ** Pagination Logic **
  const storesPerpage = 10;
  const pagesVisited = pageNumber * storesPerpage;

  const pageCount = Math.ceil(stores.length / storesPerpage);

  //                    destructured from 'event'
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  // ** Store Display logic **
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

  return (
    <>
      <InputsContainer>
        <SearchInput
          type="text"
          name="search"
          placeholder="Filter for Stores"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <MinRevenueForm>
          <label htmlFor="">Faturamento mínimo esperado</label>
          <input type="text" name="minRevenue" placeholder="15.000,00" onChange={(e) => setMinRevenue(e.target.value)} />
        </MinRevenueForm>
      </InputsContainer>

      <StoresAndMapContainer>
        <div>
          <TableContainer>
            <thead>
              <tr>
                <th>Store</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>{displayStores}</tbody>
          </TableContainer>

          {/* Container to style Pagination with Styled Components */}
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

        <div>
          <Map stores={stores} minRevenue={minRevenue}></Map>
        </div>
      </StoresAndMapContainer>
    </>
  );
};

export default Stores;
