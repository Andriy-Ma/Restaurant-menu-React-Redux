import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import { Route,Routes } from 'react-router-dom';

const App = ({RestoService}) => {
    return (
        <div style={{background: `url(${Background}) fixed center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Routes>
                <Route 
                    path="/"
                    element={<MainPage/>}
                    exact/>
                <Route 
                    path="/cart"
                    element={<CartPage/>}
                    exact/>
            </Routes>
        </div>
    )
}

export default App;