import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";
import { useEffect } from "react";


const Product = ({product,onChange,onDecrement,onIncrement,onDelete}) => {
    // console.log("Product.js render");
    // CDM + CDU + CWUM (class component) :useEffect()(functional component)

    useEffect(() => {
        console.log("Product.js useEffect")
    },[])

    return ( 
        <div className={styles.product}>
           
            <p>product name: {product.title} </p>
            <p>product price: {product.price} </p>
            <span 
                className={styles.value} >
                {product.quantity}
            </span>           
            {/* <input type="text" 
                className={styles.input} 
                onChange={onChange} 
                value = {product.title}/> */}
            <button 
                className={`
                ${styles.btn}
                ${product.quantity === 1 && styles.remove}`}
                onClick={onDecrement}>
                    {product.quantity>1 ? "-" : <BiTrash/>}

            </button>
            <button 
                className={styles.btn} 
                onClick={onIncrement}>
                    +
            </button>
            <button 
                className={styles.btn} 
                onClick={onDelete}>
                    delete
            </button>
        </div>
     );
}
 
export default Product;