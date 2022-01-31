import { Link, Outlet } from "react-router-dom";
export default function NavBar(){
    return(
    <div className="navbar">
        <nav>
          <span>|| Bourbon Reviews: </span>  
          <Link to="/BBFW"> Bulliet </Link> | { " " }
          <Link to="/HBLBB"> Hudson </Link> | { " " }
          <Link to="/TDRS"> Taconic </Link> | { " " }
          <Link to="/LSBT"> Larceny </Link> | { " " }
          <Link to="/SACD"> Smooth Ambler </Link> || { " " } 
          <span>Scotch Reviews: </span>
          <Link to="/JWDB">Double Black</Link> | { " " }
          <Link to="/JW18">18 Year</Link>  | { " " }
          <Link to="/JWBL">Blue Label</Link> | { " " }
          <Link to="/L11O">Lagavulin 11</Link> | { " " }
          <Link to="/G15S">Glenfiddich 15</Link> || { " " }
          <span>Japanese Whiskey Reviews: </span>
          <Link to="/STTK">Suntory Toki</Link> || { " " }
        </nav>
        <nav>
          <span>|| </span>
          <Link to="/home">Home</Link> || { " " }
          <Link to="/contact">Contact</Link> || { " " }
        </nav>
        <Outlet />
    </div>
    )
}