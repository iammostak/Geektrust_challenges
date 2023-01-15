import styles from "./navbar.module.css";
import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Navbar() {
   return (
      <nav className={styles.navbar}>
         <NavLink className={styles.navLink} to="/">
            <p>TeeRex Store</p>
         </NavLink>
         <div>
            <NavLink className={styles.navLink} to="/">
               <p className={styles.productNav}>Products</p>
            </NavLink>
            <div className={styles.cart}>
               <NavLink className={styles.navLink} to="/cart">
                  <BsCart3 size={24} />
                  <span>0</span>
               </NavLink>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
