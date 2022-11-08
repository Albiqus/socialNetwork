import classes from './UsersForm.module.css';

export const UsersForm = () => {
    
    return (
        <form className={classes.searchBox}>
            <input className={classes.search} autoFocus placeholder='поиск..'></input>
            <button></button>
        </form>
    )
}