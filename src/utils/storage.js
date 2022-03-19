const storage = {
    get(key) {
      console.log("!!!!!!!!!!!!!!!! " + key)
      const value = localStorage.getItem(key);
      if (!value) {
        return null;
      } else if (value == 'undefined'){
        return null
      } else{
        console.log(value)
        console.log(JSON.parse(value))
        debugger
        return JSON.parse(value);
      }
    },
  
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
      debugger
    },
  
    remove(key) {
      localStorage.removeItem(key);
    },
  
    clear() {
      localStorage.clear();
    },
  };
  
  export default storage;
  