
import React, { useState } from 'react';
import AdvertsList from './adverts/AdvertsPage/Advertslist';
import FilterForm from './adverts/AdvertsPage/FiltersForm';
import Header from './layout/header';


function App() {
  
  return (
    <div>
   <Header />
   <br></br>
   <FilterForm />
   <AdvertsList />
   </div>
  );
}

export default App;
