function SearchBar(){
    return(
        <div className="flex items-center justify-center ">
            <div className="flex border-2 border-gray-200 rounded">
                <input type="text" className="text-slate-900" placeholder="Search..."></input>
                <button className="text-white bg-gray-600 border-l ">
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchBar;