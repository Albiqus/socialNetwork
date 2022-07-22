import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.nav2}>
                <div><NavLink className={classes.item} to='/profile'>Профиль</NavLink></div>
                <div><NavLink className={classes.item} to='/dialogs'>Сообщения</NavLink></div>
                <div><NavLink className={classes.item} to='#s'>Новости</NavLink></div>
                <div><NavLink className={classes.item} to='#s'>Музыка</NavLink></div>
                <div><NavLink className={classes.item} to='#s'>Настройки</NavLink></div>
            </div>
        </div>
    )
}

export {Nav}