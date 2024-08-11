
import "../Styles/Navbar.css"
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { AlignJustify } from 'lucide-react';


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="logo">
        <AlignJustify className="show-on-mobile" /> &nbsp;
          <img src="/Images/Logo.png" alt="Logo" />
        </div>
        <div>
          <p className="Logo-text">LOGO</p>
        </div>
        
        <div className="navIcons">
          <a href="/search">  <Search /></a>
          <a href="/fav"><Heart /></a>
          <a href="/shopping"><img src="/Images/shopping-bag.png" alt="shopping-bag" /></a>
          <a href="/language"> <div className="navIcon-Lang">ENG<ChevronDown /></div></a>
        </div>
    
      </div>
    
          <ul className="navLinks">
          <li><a href="/shop">SHOP</a></li>
          <li><a href="/">SKILLS</a></li>
          <li><a href="/sale">STORIES</a></li>
          <li><a href="/contact">ABOUT</a></li>
          <li><a href="/contact">CONTACT US</a></li>
        </ul>
      
    </div>

  );
}
