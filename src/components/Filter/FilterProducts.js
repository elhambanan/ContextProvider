import { useState } from "react";
import { useProductsActions } from "../Providers/ProductsProviders";
import Select from 'react-select';
import styles from "../Filter/filter.module.css"
import SelectComponent from "../../common/Select/Select";

const options = [
    {value: "", label: "All"},
    {value: "S", label: "S"},
    {value: "M", label: "M"},
    {value: "L", label: "L"},
    {value: "X", label: "X"},
    {value: "XL", label: "XL"},
]
const sortOptions = [
    {value: "highest", label: "highest"},
    {value: "lowest", label: "lowest"},
]
const FilterProducts = () => {
    const dispatch = useProductsActions();
    const [value, setValue] = useState("");
    const [sort, setSort] = useState("");

    const changeHandler = (selectedOption) => {
        console.log(selectedOption)
        dispatch({type : "filter", selectedOption });
        dispatch({type : "sort", selectedOption: sort})
        setValue(selectedOption)
    }
    const sortHandler = (selectedOption) => {
        dispatch({type : "sort", selectedOption})
        setSort(selectedOption)
    }

    return ( 
        <div className={styles.filter}>
            <p>filter products based on:</p>
            {/* <div className={styles.selectContainer}>
                <span>order by</span>
                <Select
                    onChange = {changeHandler}
                    value = {value}
                    options = {options}
                />
            </div>
           
            <div className={styles.selectContainer}>
                <span>sort by</span>
                <Select
                    onChange = {sortHandler}
                    value = {sort}
                    options = {sortOptions}
                />
            </div> */}
             <SelectComponent 
                title = "filter by size"
                onChange = {changeHandler}
                value = {value}
                options = {options}
            />
            <SelectComponent 
                title = "sort by price"
                onChange = {sortHandler}
                value = {sort}
                options = {sortOptions}
            />
        </div>
     );
}
 
export default FilterProducts;