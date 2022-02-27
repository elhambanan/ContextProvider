import { useProducts } from "../Providers/ProductsProviders";
import styles from "./navBar.module.css";


const NavBar = () => {
    const products = useProducts();
    const totalItems=products.filter(p => p.quantity>0).length

    return ( 
        <header className={styles.navbar}>
            <h3>My Shopping-Center</h3>
            <span>{totalItems}</span>
        </header>
     );
}
 
export default NavBar;