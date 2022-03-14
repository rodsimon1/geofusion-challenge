import { Container } from './AppStyles';
import Header from './components/Header/Header';
import Stores from './components/Stores/Stores';
// import Map from './components/Map/Map';

// console.log('1a loja', stores[0]);

function App() {
  return (
    <Container>
      <Header />
      <div style={{ display: 'flex' }}>
        <Stores />
        {/* <Map></Map> */}
      </div>
    </Container>
  );
}

export default App;
