import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage';

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes;
