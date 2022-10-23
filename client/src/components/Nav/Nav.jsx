import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setIsAuth } from '../../store/auth-reducer';

const Nav = (props) => {

    const onExitNavLinkClick = () => {
        props.setIsAuth(false)
    }
    
    return (
        <div className={classes.navBox}>
            <div className={classes.nav}>
                <NavLink to='/profile'>Профиль</NavLink>
                <NavLink to='/messages'>Сообщения</NavLink>
                <NavLink to='/users'>Пользователи</NavLink>
                <NavLink to='/settings'>Настройки</NavLink>
                <NavLink onClick={onExitNavLinkClick} to='/login'>Выход</NavLink>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
   
    }
}


export default compose(connect(mapStateToProps, { setIsAuth }))(Nav)