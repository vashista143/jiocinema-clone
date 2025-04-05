export default function Header(){
    return(
    <div>
    <div className="totalheader">
        <div className="header1">
            <img src="/jiocinemalogo.svg" className="logoimage"/>
            <div className="premiumbutton"> <p className="prem-text">Go Premium</p></div>
        </div>
        <div className="listhead">
                <p className="underline">Home</p>
                <p>Sports</p>
                <p>Movies</p>
                <p>TV Shows</p>
                <p>More</p>
        </div>
        <div className="header2">
            <div className="searchbox">
                <img src="search.png" className="searchicon" height="15px" width="15px"/>
                <form>
                    <input type="text" className="searchbar" placeholder="Movies, Shows and more"/>
                </form>
                <img src="mic.png" className="searchicon" height="15px" width="15px"/>
            </div>
            <img src="search.png" className="searchicon-media" height="15px" width="15px"/>
            <img src="user.svg" height="30px" width="30px" className="userimg"/>
        </div>
    </div>
    <hr/>
    </div>
)
}