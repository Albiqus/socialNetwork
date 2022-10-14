import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <div className={classes.navBox}>
            <div className={classes.nav}>
            <NavLink to='/profile'>Профиль</NavLink>
            <NavLink to='/messages'>Сообщения</NavLink>
            <NavLink to='/users'>Пользователи</NavLink>
            <NavLink to='/settings'>Настройки</NavLink>
            <NavLink to='/login'>Выход</NavLink>
            </div>
        </div>
    )
}