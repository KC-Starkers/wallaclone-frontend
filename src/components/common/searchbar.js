
function SearchBar({change, value}){
    console.log(value)

    return(
        <input type="text" className="text-slate-900" placeholder="Search..." name="name" onChange={change} ></input>

    )
}

export default SearchBar;