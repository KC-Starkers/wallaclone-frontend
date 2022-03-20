
function SearchBar({change, value}){
    console.log(value)

    return(
        <input type="text" name="name" value={value} onChange={change} className="text-slate-900" placeholder="Search..." ></input>

    )
}

export default SearchBar;