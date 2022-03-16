import { Container } from './AppStyles';
import Header from './components/Header/Header';
import Stores from './components/Stores/Stores';

function App() {
  return (
    <Container>
      <Header />
      <Stores />
    </Container>
  );
}

export default App;
