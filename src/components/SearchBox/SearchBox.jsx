import css from './SearchBox.module.css';
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/Filters/FilterSlice";


export default function SearchBox() {
    const dispatch = useDispatch();
    return (
        <div className={css.container}>
            <label className={css.label} htmlFor="search">Find contacts by name</label>
            <input className={css.input} id="search" type="text"
                onChange={(e) => dispatch(changeFilter(e.target.value))} />
        </div>
    )
}