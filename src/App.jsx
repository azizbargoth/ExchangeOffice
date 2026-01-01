import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RouterProvider } from 'react-router-dom';
import Layout from './Routes/LayOut';
import routes, { router } from './Routes/Routes';
import { Container } from 'react-bootstrap';
import './App.css'

function App() {
 

  return (
    <div>
     <RouterProvider router={routes} /> 
    </div>  
      

  )
}

export default App
