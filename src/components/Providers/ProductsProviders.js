import React, { useContext, useReducer} from "react";
import {productdData} from "../../db/products"

const ProductContext = React.createContext(); //state
const ProductContextDispacher = React.createContext(); //setState

// const initialState = [
//     {title: "react.js", price: "99 $", id: 1, quantity: 1},
//     {title: "node.js", price: "78 $", id: 2, quantity: 3},
//     {title: "veu.js", price: "45 $", id: 3, quantity: 5},
//     {title: "javaScript", price: "65 $", id: 4, quantity: 2},
//   ];
  const reducer = (state, action) => {
    switch(action.type){
        case "increment":{
            const index = state.findIndex((item)=>item.id === action.id);
            const product = {...state[index]};
            product.quantity++;

            const updatedProducts = [...state];
            updatedProducts[index] = product;
            return updatedProducts ;
        };

        case "decrement":{
            const index = state.findIndex((item)=>item.id === action.id);
            const product = {...state[index]};
            if(product.quantity === 1){
            const filteredItem = state.filter(p => p.id!==action.id)
            return filteredItem
        }else {
            const updatedProducts = [...state]
            product.quantity --;
            updatedProducts[index] = product;
            return updatedProducts
        }
        };
        
        case "remove" : 
            const filteredItem = state.filter(p => p.id !== action.id)
            return   filteredItem;  
          
        case "edit" : {
            const index = state.findIndex((item)=>item.id=== action.id);
            const product = {...state[index]};
            product.title = action.event.target.value;
        
            // update products:
            const updatedProducts = [...state]
            updatedProducts[index] = product;
            return updatedProducts
        }  
        default: 
            return state;        
    }
}  

const ProductProvider = ({children}) => {
    const [products, dispatch] = useReducer(reducer, productdData);
    return ( 
        <ProductContext.Provider value={products}>
            <ProductContextDispacher.Provider value={dispatch}>
                 {children}
            </ProductContextDispacher.Provider>
        </ProductContext.Provider>
     );
}
 
export default ProductProvider;


// custom Hook for context:

export const useProducts = () => useContext(ProductContext);
export const useProductsActions = () => {
    return useContext(ProductContextDispacher);
    // const products = useContext(ProductContext);

    // const changeHandler = (e, id) => {
    //     const index = products.findIndex((item)=>item.id===id);
    //     const product = {...products[index]};
    //     product.title = e.target.value;
    
    //     // update products:
    //     const updatedProducts = [...products]
    //     updatedProducts[index] = product;
    //     setProducts(updatedProducts)
    
    // } 
    // const decHandler = (id) => {
    //   const index = products.findIndex(item => item.id === id);
    //   const product = {...products[index]};
    //     if(product.quantity === 1){
    //         const filteredItem = products.filter(p => p.id!==id)
    //         setProducts(filteredItem)
    //     }else {
    //         const updatedProducts = [...products]
    //         product.quantity --;
    //         updatedProducts[index] = product;
    //         setProducts(updatedProducts)
    //     }
    // } 
    // const incHandler = (id) => {
     
    //   const index = products.findIndex((item)=>item.id===id);
    //   const product = {...products[index]};
    //   product.quantity++;
    //   const updatedProducts = [...products]
    //   updatedProducts[index] = product;
    //   setProducts(updatedProducts)
    
    // }
    // const removeHandler = (id) => {
    //   const filteredItem = products.filter(p => p.id !== id)
    //   setProducts(filteredItem);
    // }
    // return {changeHandler, decHandler, incHandler, removeHandler}
};

