import './App.css';
import {
 Route, Routes
} from 'react-router-dom';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Footer } from './components/Footer/Footer';

function App(props) {
  return (
      <div className='app-wrapper'>
          <Header/>
          <Nav/>
          <div className='app-wrapper-content'>
            <Routes>
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} addPost={props.addPost}/>} />
            <Route path='/dialogs/*' element={<Dialogs dialogsPage={props.state.dialogsPage}/>} />
            </Routes>
          </div>
          <Footer/>
    </div>
  ); 
}
export default App;
