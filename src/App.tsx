import React, {useState, useEffect} from 'react';
import ShoppingPage from './Components/ShoppingPage';
import PortalNavigation from './Components/PortalNavigation';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home';

import { appStore } from './ApplicationStore/LoginStore'

import { Provider } from 'react-redux';

import { HashRouter as Router, Routes,
Route } from 'react-router-dom';

import './App.css';

function App() {

  const [online,setOnline] = useState(navigator.onLine);
  const setOffline = () => {
    console.log('We are offline!');
    setOnline(false);
  };

  const setOnlineFunc = () => {
    console.log('We are Online!');
    setOnline(true);
  };

  useEffect(() => {
    console.log('in use effect', navigator.onLine);
    window.addEventListener('offline', setOffline);
    window.addEventListener('online', setOnlineFunc)
    

    // cleanup if we unmount
    return () => {
      window.removeEventListener('offline', setOffline);
      window.removeEventListener('online', setOnlineFunc)
      
    }
  }, []);

  return (
    <Router>
      <Provider store={appStore}>
      <div className="App">
        <PortalNavigation />
        <Routes>
          <Route  path="/" element={<Home />}></Route>
          <Route  path='/shop' element={<ShoppingPage />}></Route>
          <Route  path='/login' element={<LoginPage />}></Route>  
        </Routes> 
        { !online && <div style={{color:'white', paddingLeft:'10px', backgroundColor:'#372b25', width:'270px', height:'50px'}}> You are in Offline mode</div>}  
      </div>
      </Provider>
    </Router>
  );
}

export default App;
