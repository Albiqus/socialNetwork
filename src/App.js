import './App.css';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';

function App() {
  return (
      <div className='app-wrapper'>
          <Header/>
          <Nav/>
          <Content/>
    </div>
  );
}

export default App;
