import './App.css';
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Footer } from './components/Footer/Footer';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
          <Header/>
          <Nav/>
          <div className='app-wrapper-content'>
            <Routes>
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage}/>} />
            <Route path='/dialogs/*' element={<Dialogs dialogsPage={props.state.dialogsPage}/>} />
            </Routes>
          </div>
          <Footer/>
    </div>
    </BrowserRouter>
  ); 
}
export default App;
