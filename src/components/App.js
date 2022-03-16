
import React, { useState } from 'react';
import AdvertsList from './adverts/AdvertsPage/Advertslist';
import AdvertsPage from './adverts/AdvertsPage/AdvertsPage';
import FilterForm from './adverts/AdvertsPage/FiltersForm';
import Header from './layout/header';


function App() {
  
  return (
    <div>
   <Header />
   <br></br>
   <FilterForm />
   <AdvertsList />
   <AdvertsPage />
   </div>
  );
}

export default App;
