import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import  Nav  from './components/Nav/Nav';
import  Login  from './components/Login/Login';
import  Messages  from './components/Messages/Messages';
import Profile  from './components/Profile/Profile';
import  Settings  from './components/Settings/Settings';
import  Users from './components/Users/Users';
import Register from './components/Register/Register';
import Friends from './components/Friends/Friends';

function App() {
    return (
     
    <div className="App">
                <Header />
        <div className='wrapper'>
            <Nav/>
            <Routes>
            <Route path='/login' element={<Login/>}/> 
            <Route path='/profile/:userId' element={<Profile key={window.location.pathname} />} />  
            <Route path='/friends/:userId' element={<Friends />} />        
            <Route path='/messages' element={<Messages/>}/> 
            <Route path='/users' element={<Users/>}/>
            <Route path='/settings' element={<Settings />} />
            <Route path='/register' element={<Register/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;

