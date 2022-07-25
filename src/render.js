import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    addPost
} from './redux/state.js';
import {
    BrowserRouter
  } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = (state) => {
    root.render(
        //   <React.StrictMode>
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>
        //   </React.StrictMode> ЗАКОММЕНТИЛИ ПОТОМУ ЧТО ДВА РАЗА ВЫЗЫВАЕТ КОМПОНЕНТЫ
        );
}

export{rerender}
