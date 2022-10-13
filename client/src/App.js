import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Messages } from './components/Messages/Messages';
import { Nav } from './components/Nav/Nav';
import { Profile } from './components/Profile/Profile';
import { Settings } from './components/Settings/Settings';
import { Users } from './components/Users/Users';

function App() {
    return (
      < BrowserRouter >
    <div className="App">
        <Header/>
        <div className='wrapper'>
            <Nav/>
            <Routes>
            <Route path='/login' element={<Login/>}/> 
            <Route path='/profile' element={<Profile/>}/> 
            <Route path='/messages' element={<Messages/>}/> 
            <Route path='/users' element={<Users/>}/> 
            <Route path='/settings' element={<Settings/>}/> 
            </Routes>
          </div>
    </div>
        </BrowserRouter>
  );
}

export default App;
