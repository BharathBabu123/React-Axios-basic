import React from 'react';
import './App.css';
import Basic from './component/Basic';
import AxiosInput from './component/AxiosInput';
import Axios from './component/Axios';
import AxiosDelete from './component/AxiosDelete';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <Basic/>
     {/* <Search/> */}
     <Axios/>
     <AxiosInput/>
     <AxiosDelete/>
    </div>
  );
}

export default App;
