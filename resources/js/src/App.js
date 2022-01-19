import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Home } from './pages/Home'
import { Dashboard } from './pages/admin/Dashboard';

import './App.scss'

function App() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Home} />
            <Route path='/admin' component={ Dashboard } />
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
} else {
    console.log("oi")

}
