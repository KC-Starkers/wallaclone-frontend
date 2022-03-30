function SearchBar({change, value, className}){
    return(
        <input type="text" name="name" value={value} onChange={change} className={className} placeholder="Search..." ></input>
    )
}

export default SearchBar;