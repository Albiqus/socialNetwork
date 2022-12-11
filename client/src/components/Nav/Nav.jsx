import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';



const Nav = ({ navVisible, authUserData }) => {



    let navClassName = classes.navBox;
    if (!navVisible) navClassName += ` ${classes.hidden}`
    if (localStorage.getItem('id')) navClassName = classes.navBox;

    return (
        <div className={navClassName}>
            <div className={classes.nav}>
                <NavLink to={`/profile/${localStorage.getItem('id')}`}>Профиль</NavLink>
                <NavLink to={`/friends/${localStorage.getItem('id')}`} className={classes.friends}>Друзья<span>{authUserData?.friendsRequestsCount}</span></NavLink>
                <NavLink to='/messages'>Сообщения</NavLink>
                <NavLink to='/users'>Пользователи</NavLink>
                <NavLink to='/settings'>Настройки</NavLink>
                <NavLink to='/login'>Выход</NavLink>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        navVisible: state.nav.navVisible,
        isClickedProfileLink: state.nav.isClickedProfileLink,
        authUserData: state.authUserReducer.authUserData
    }
}


export default compose(connect(mapStateToProps, {}))(Nav)