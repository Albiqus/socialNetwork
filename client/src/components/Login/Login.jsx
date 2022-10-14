import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import classes from './Login.module.css';

export const Login = (props) => {
    return (
        <div className={classes.login}>
            <p className={classes.header}>Вход</p>
                <form action="">
                        <label for="">Логин</label>
                        <input type="text" />
                        <label for="">Пароль</label>
                        <input type="password" />
                        <button type='submit'>Войти</button>
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