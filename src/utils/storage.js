const storage = {
    get(key) {
      console.log("!!!!!!!!!!!!!!!! " + key)
      const value = localStorage.getItem(key);
      if (!value) {
        return null;
      } else if (value == 'undefined'){
        return null
      } else{
        return JSON.parse(value);
      }
    },
  
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    },
  
    remove(key) {
      localStorage.removeItem(key);
    },
  
    clear() {
      localStorage.clear();
    },
  };
  
  export default storage;
  