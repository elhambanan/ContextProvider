import React from 'react';
import Product from '../Product/Product';
import { useProducts, useProductsActions } from '../Providers/ProductsProviders';
import styles from "./productList.module.css"

// class ProductListt  extends Component {
//     // componentDidUpdate(prevProps, prevState){
//     //     console.log("PruductList.js componentDidUpdate");
//     //     if(prevProps.products !== this.props.products){
//     //         // some AJAX call => and gets new data
//     //     }
//     //   }
//     renderProduct = () => {
//         const {products,onChange,onDecrement,onIncrement,onRemove} = this.props;
//         if (products.length === 0)
//             return <div>there is no Product</div>
//         return (
//             <div className={styles.container}>
//                 {products.map((p, index) => {
//                     return (
//                         <Product 
//                         product={p}
//                         key={index}
//                         onChange = {(e) => onChange(e, p.id)}
//                         onDecrement = {() => onDecrement(p.id)}
//                         onDelete = {() => onRemove(p.id)}
//                         onIncrement = {() => onIncrement(p.id)}
//                      />
//                     )
//                 })}
//             </div>
//         );
//     }
//     render() {
//         console.log("ProductList.js render")
//         const {products} = this.props;
//         return (
//             <div>
//                 {!products.length && (<div>go to Shopping</div>)}
//                 {this.renderProduct()}
//             </div>
//         )

//     }
// }
const ProductList = (props) => {
    const products = useProducts();
    const dispatch = useProductsActions();

    const renderProduct = () => {
        if (products.length === 0) return <div>there is no Product</div>

        return (
            <div className={styles.container}>
                {products.map((p, index) => {
                    return (
                        <Product 
                            product={p}
                            key={index}
                            onChange = {(e)   =>  dispatch({type : "edit", id: p.id, event: e })}
                            onDecrement = {() =>  dispatch({type : "decrement", id: p.id })}
                            onDelete = {()    =>  dispatch({type : "remove", id: p.id })}
                            onIncrement = {() =>  dispatch({type : "increment", id: p.id })}
                       />
                    )
                })}
            </div>
        );
    }
    return ( 
        <div>
        {!products.length && (<div>go to Shopping</div>)}
        {renderProduct()}
        </div>
     );
}
 
 
export default ProductList;