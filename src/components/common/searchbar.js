function SearchBar(){
    return(
        <div class="flex items-center justify-center ">
            <div class="flex border-2 border-gray-200 rounded">
                <input type="text" class="text-slate-900" placeholder="Search..."></input>
                <button class="text-white bg-gray-600 border-l ">
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchBar;