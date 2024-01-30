function Search() {
    return(
        <>
         <div className="search_box">
            {/* <p className="find_ico">Find Anything on Buyval</p> */}
          <div className="search_wrap">
            <input
              type="text"
              placeholder="Search Products, brands and categories"
            ></input>
            <span className="sch">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
        </>
    )
}
export default Search;