import './App.css';
import reportWebVitals from './reportWebVitals';
import React, {useEffect} from 'react';
import {Route, Routes, Link,} from "react-router-dom";
import Users from "./components/users";
import Peter from "./components/peter";
import Vasya from "./components/vasya";
import Home from "./components/home";
/*function Users(){
    if(window.location.href==='/'){
        console.log('none');
        return(<Link to={'/'}>Home</Link>);
    }
    else if(window.location.href==='users'){
        return (<><Link to={'/'}>Home-></Link><Link to={'/users'}>Users</Link></>);
    }
    else if(window.location.href==='vasya'){
        return (<><Link to={'/'}>Home-></Link><Link to={'/users'}>Users</Link><Link to={'/vasya'}>Vasya</Link></>);
    }
    else if(window.location.href==='peter'){
        return (<><Link to={'/'}>Home-></Link><Link to={'/users'}>Users</Link><Link to={'/peter'}>Peter</Link></>);
    }
    console.log('none');
}*/
function App() {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/users/vasya" element={<Vasya/>}/>
            <Route path="/users/peter" element={<Peter/>}/>
        </Routes>
           );
}

export default App;
