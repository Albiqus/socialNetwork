import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setNavVisible } from '../../store/nav-reducer';
import { resetUsersSettings } from '../../store/users-reducer';


const Nav = (props) => {
    
    const onExitNavLinkClick = () => {
        localStorage.clear()
        props.resetUsersSettings()
        props.setNavVisible(false)
    }

    let navClassName = classes.navBox;
    if (!props.navVisible) {
        navClassName += ` ${classes.hidden}`
    }
    if (localStorage.getItem('id')) {
        navClassName = classes.navBox;
    }

    return (
        <div className={navClassName}>
            <div className={classes.nav}>
                <NavLink to={`/profile/${localStorage.getItem('id')}`}>Профиль</NavLink>
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
        navVisible: state.nav.navVisible,
        isClickedProfileLink: state.nav.isClickedProfileLink
    }
}


export default compose(connect(mapStateToProps, { setNavVisible, resetUsersSettings }))(Nav)