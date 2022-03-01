import styles from "./select.module.css";
import Select from 'react-select';
// ... spread operator =>
// 1. clone
// 2. rest operator

const SelectComponent = ({title, ...rest}) => {
    return ( 
        <div className={styles.selectContainer}>
            <span>{title}</span>
            <Select {...rest} className = {styles.select}
            />
        </div>
     );
}
 
export default SelectComponent;