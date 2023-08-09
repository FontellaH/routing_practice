//imported the View into the App.js I tried to do it the simplfied way but it seemed to complicated

import ViewColor from './View/ViewColor';
import ViewFour from './View/ViewFour';
import ViewHello from './View/ViewHello';
import ViewHome from './View/ViewHome';
import React from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ViewHome />} />
        <Route path='/4' element={<ViewFour/>} />
        <Route path='/hello' element={<ViewHello />} />
        <Route path='/hello/blue/red' element={<ViewColor />} />
      </Routes>


    </div>
  );
}

export default App;
