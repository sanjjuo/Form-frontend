import React from 'react'
import {BrowserRouter,Route,Routes}  from 'react-router-dom'
import Form from './form';
import Viewform from './viewform';

function App() {
  

   
    
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Form/>}path='/'/>
          <Route element={<Viewform/>} path='Data'/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
