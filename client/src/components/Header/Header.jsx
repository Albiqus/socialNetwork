import classes from './Header.module.css';

export const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.logoBox}>
                <div className={classes.logo}></div>
                <p className={classes.text}>puzzle</p>
            </div>
        </div>
    )
}