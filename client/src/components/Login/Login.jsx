import { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { signIn } from '../../thunks/signIn';
import { validate } from '../../utils/validate/validateLogin';
import classes from './Login.module.css';

const Login = (props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const [loginError, setLoginError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)

    const onLoginChange = (e) => {
        setLoginError(null)
        setLogin(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPasswordError(null)
        setPassword(e.target.value)
    }

    const onSignInButtonClick = (e) => {
        e.preventDefault()
        const errors = validate(login, password)
        setLoginError(errors.loginError)
        setPasswordError(errors.passwordError)
        if (!errors.errorStatus) {
            props.signIn(login, password)
        }
    }

    return (
        <div className={classes.login}>
            {props.successRegistrationStatus && <p className={classes.successRegistrationHeader}>Регистрация прошла успешно</p>}
            {!props.successRegistrationStatus && <p className={classes.header}>Вход</p>}
            <form>
                {loginError && <p className={`${classes.error} ${classes.loginError}`}>{loginError}</p>}
                {passwordError && <p className={`${classes.error} ${classes.passwordError}`}>{passwordError}</p>}

                <label>Логин</label>
                <input onChange={onLoginChange} value={login} placeholder='ivan123@email.com' type="text" />
                <label>Пароль</label>
                <input onChange={onPasswordChange} value={password} type="password" />
                <div className={classes.buttonBox}>
                    <button onClick={onSignInButtonClick}>Войти</button>
                </div>
            </form>
            <p className={classes.description}>Нет учётной записи? <NavLink to='/register'>Зарегистрируйтесь</NavLink></p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        successRegistrationStatus: state.registerPage.successRegistrationStatus
    }
}


export default compose(connect(mapStateToProps, { signIn }))(Login)