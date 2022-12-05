 import React from "react";
import { Link } from "react-router-dom";
import '../stylecomp/Header.css';
//  import SearchIcon from '@material-ui/icons/Search';
//  import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useStateValue } from "./StateProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping ,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
 function Header(){
     const [{basket}] = useStateValue();


    return(
        <nav className="header">
        <Link to="/">
        <img className="header_logo" src="https://template.canva.com/EADgfb8lx2E/2/0/400w-8o0WrhqienU.jpg"   alt="img"    />
        </Link>
      <div className="header_search">
      <input type='text' className="header_searchInput"/>
      {/* <SearchIcon className="header_searchIcon"/> */}
      <FontAwesomeIcon className="header_searchIcon" icon={faMagnifyingGlass} />

      
      </div>
      <div className="header_nav">
       <Link to="/login"    className="header_link">
       <div className="header_option">
       <span className="header_optionLineOne">Hello</span>
       <span  className="header_optionLineTwo">Sign In</span>
       </div>
      </Link>
       
      <Link to="/"    className="header_link">
       <div className="header_option">
       <span className="header_optionLineOne">Return</span>
       <span className="header_optionLineTwo">To Order</span>
       </div>
      </Link>
      <Link to="/checkout"    className="header_link">
      <div className="header_optionBasket">
      
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        <span className="header_optionLineTwo  header_optionBasketCount" >{basket.length }</span>
      
      </div>
     </Link>

     
      </div>
       
        
     </nav>
        
        
        
        
        
        
        
        
        
    )
 }
  export default Header;
