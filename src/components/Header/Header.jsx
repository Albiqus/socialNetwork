import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
        <img src='img/logo.png' alt='logo' height={200}></img>
        </header>
    )
}

export {Header}