import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import classes from './Login.module.css';

export const Login = (props) => {
    return (
        <div className={classes.login}>
            <p className={classes.header}>Вход</p>
                <form>
                        <label>Логин</label>
                        <input type="text" />
                        <label>Пароль</label>
                        <input type="password" />
                        <button>Войти</button>
                </form>
            <p className={classes.description}>Нет учётной записи? <NavLink to='/register'>Зарегистрируйтесь</NavLink></p> 
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

export default compose(connect(mapStateToProps, {}))(Login)