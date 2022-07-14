import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.nav2}>
                <div><a className={classes.item} href='#s'>Профиль</a></div>
                <div><a className={classes.item}  href='#s'>Сообщения</a></div>
                <div><a className={classes.item}  href='#s'>Новости</a></div>
                <div><a className={classes.item}  href='#s'>Музыка</a></div>
                <div><a className={classes.item} href='#s'>Настройки</a></div>
            </div>
        </nav>
    )
}

export {Nav}