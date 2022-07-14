import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
        <img src='https://britainsbestguides.org/wp-content/uploads/2017/04/2000px-Free_logo.svg_.png' alt='logo' height={200}></img>
        </header>
    )
}

export {Header}