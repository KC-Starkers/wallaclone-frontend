const filterByName =
  filter =>
  ({ name }) => {
    if (filter == undefined){
      console.log(filter)
      return null;
    } else {
      console.log(filter)
    const cleanFilter = filter.trim();
    return !cleanFilter || new RegExp(cleanFilter, 'gi').test(name);
  }
  };

const filterByPrice =
filter =>
({ price }) => {
  if (!filter.length) {
    return true;
  }
  const [min, max] = filter;
  console.log(min)
  console.log(max)
  if (!max) {
    return price >= min;
  }
  return price >= min && price <= max;
};

 
const filterByExperience =
filter =>
({ experience }) => {
  if (!filter.length) {
    return true;
  }
  const [min, max] = filter;
  console.log(min)
  console.log(max)
  if (!max) {
    return experience >= min;
  }
  return experience >= min && experience <= max;
};




  const filterBySale =
  filter =>
  ({ offerAdvert }) => 
  ['', offerAdvert ? 'true' : 'false'].includes(filter);

  //[offerAdvert ? 'true' : 'false'].includes(filter);


  const filterByTags =
  filter =>
  ({ tags }) =>
    !filter.length || filter.every(tag => tags.includes(tag));

    
  const filterByPay =
  filter =>
  ({ paymentMethods }) =>
    !filter.length || filter.every(pay => paymentMethods.includes(pay))
    


  export const saleFilter = {
    all: { value: 'all', label: 'All' },
    sell: { value: 'sell ', label: 'Sell' },
    buy: { value: 'buy', label: 'Buy' },
  };

  export const defaultFilters = {
    name: '',
    price: [],
    sale: saleFilter.all.value,
    tags: [],
    paymentMethods: [],
    offerAdvert: [],
    experience: []
  };
  


 // export const filterAdverts = (adverts, { name, price, sale, tags } ) => 
export const filterAdverts = (adverts, {name, offerAdvert, price, tags, paymentMethods, experience} ) => 
adverts
    .filter(filterByName(name))
    .filter(filterByTags(tags))
    .filter(filterByPay(paymentMethods))
    .filter(filterByPrice(price))
    .filter(filterByExperience(experience))
    .filter(filterBySale(offerAdvert));