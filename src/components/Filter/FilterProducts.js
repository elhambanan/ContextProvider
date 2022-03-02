import { useState } from "react";
import { useProductsActions } from "../Providers/ProductsProviders";
import Select from 'react-select';
import styles from "../Filter/filter.module.css"
import SelectComponent from "../../common/Select/Select";
import SearchBar from "../../common/Search/Search";

const filterOptions = [
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
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("");

    const filterHandler = (selectedOption) => {
        console.log(selectedOption)
        dispatch({type : "filter", selectedOption });
        dispatch({type : "sort", selectedOption: sort})
        setFilter(selectedOption)
    }
    const sortHandler = (selectedOption) => {
        dispatch({type : "sort", selectedOption})
        setSort(selectedOption)
    }

    return ( 
        <section>
            <SearchBar filter = {filter}/>
            <div className={styles.filter}>
                <p>filter products based on:</p>
                <SelectComponent 
                    title = "filter by size"
                    onChange = {filterHandler}
                    value = {filter}
                    options = {filterOptions}
                />
                <SelectComponent 
                    title = "sort by price"
                    onChange = {sortHandler}
                    value = {sort}
                    options = {sortOptions}
                />
            </div>
        </section>
     
     );
}
 
export default FilterProducts;