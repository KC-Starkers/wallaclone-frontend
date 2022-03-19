function FilterComp({submit, change, value, tag}){
    return (
        <form onSubmit={submit}>
        <input type="text" className="text-slate-900" placeholder="Search..." name="name" value={value.name} onChange={change} ></input>
        <br></br>
        {tag.map(option => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              onChange={change}
            />
            {option}
          </label>
        ))}
        <br></br>
        <button className="text-white bg-gray-600 border-l " type="submit">
            Search
        </button>
      </form>
    )
}

export default FilterComp