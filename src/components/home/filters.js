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

const filterBySale =
filter =>
({ sale }) => {
  [
    saleFilter.all.value,
    sale ? saleFilter.sell.value : saleFilter.buy.value,
  ].includes(filter);
console.log(filter)
console.log(sale)}

  const filterByTags =
  filter =>
  ({ tags }) =>
    !filter.length || filter.every(tag => tags.includes(tag));

  export const saleFilter = {
    all: { value: 'all', label: 'All' },
    sell: { value: 'sell', label: 'Sell' },
    buy: { value: 'buy', label: 'Buy' },
  };

  export const defaultFilters = {
    name: '',
    price: [],
    sale: saleFilter.all.value,
    tags: [],
  };
  


 // export const filterAdverts = (adverts, { name, price, sale, tags } ) => 
  export const filterAdverts = (adverts, {name} ) => 

adverts
    .filter(filterByName(name))
    /*
    .filter(filterByTags(tags));
    */
