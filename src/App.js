import './App.css';
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
          <Header/>
          <Nav/>
          <div className='app-wrapper-content'>
            <Routes>
            <Route path='/profile' element={<Profile/>} />
            <Route path='/dialogs*' element={<Dialogs/>} />
            </Routes>
          </div>
          <Footer/>
    </div>
    </BrowserRouter>
  ); 
}
export default App;
