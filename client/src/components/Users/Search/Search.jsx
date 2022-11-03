import classes from './Search.module.css';

export const Search = () => {
    
    return (
        <form className={classes.searchBox}>
            <input className={classes.search} autoFocus placeholder='поиск..'></input>
            <button></button>
        </form>
    )
}