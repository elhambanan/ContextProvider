import { useState } from "react";
import { useProductsActions } from "../../components/Providers/ProductsProviders";
import styles from "./search.module.css"

const SearchBar = ({filter}) => {
    const [value, setValue] = useState("");
    const dispatch = useProductsActions();

    const searchHandler = (e) => {
        dispatch({type : "filter", selectedOption : filter });
        dispatch({type : "search", event: e});
        setValue(e.target.value);
    }
  
    return ( 
        <div className={styles.formControl}>
            <p>search for :</p>
            <input 
                type="text"
                placeholder = "search for ..."
                onChange={searchHandler}
                value={value}
            />
        </div>
     );
}
 
export default SearchBar;