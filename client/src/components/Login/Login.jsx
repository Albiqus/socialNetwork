import { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { setInvalidAuthError } from '../../store/login-reducer';
import { setSuccessRegistrationStatus } from '../../store/register-reducer';
import { signIn } from '../../thunks/login-thunks/signIn';
import { validate } from '../../utils/login-utils/validateLogin';
import classes from './Login.module.css';
import preloader from '../../images/preloaders/ellipsis-preloader.svg'

const Login = (props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const [loginError, setLoginError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)

    const onLoginChange = (e) => {
        props.setInvalidAuthError(null)
        setLoginError(null)
        setLogin(e.target.value)
    }

    const onPasswordChange = (e) => {
        props.setInvalidAuthError(null)
        setPasswordError(null)
        setPassword(e.target.value)
    }

    const onSignInButtonClick = (e) => {
        e.preventDefault()

        props.setSuccessRegistrationStatus(false)

        const errors = validate(login, password)
        setLoginError(errors.loginError)
        setPasswordError(errors.passwordError)
        
        if (!errors.errorStatus) {
            props.signIn(login, password)
        }
    }
    return (
        <div className={classes.loginBox}>
            {!props.loginPreloader &&
                <div className={classes.login}>
                    {localStorage.getItem('id') && <Navigate to={`/profile/${localStorage.getItem('id')}`} />}
                    {props.successRegistrationStatus && <p className={classes.successRegistrationHeader}>Регистрация прошла успешно</p>}
                    {!props.successRegistrationStatus && <p className={classes.header}>Вход</p>}
                    <form>
                        {loginError && <p className={`${classes.error} ${classes.loginError}`}>{loginError}</p>}
                        {passwordError && <p className={`${classes.error} ${classes.passwordError}`}>{passwordError}</p>}
                        {props.invalidAuthError && <p className={`${classes.error} ${classes.invalidAuthError}`}>{props.invalidAuthError}</p>}
                        <label>Логин</label>
                        <input onChange={onLoginChange} value={login} placeholder='ivan123@email.com' type="text" />
                        <label>Пароль</label>
                        <input onChange={onPasswordChange} value={password} type="password" />
                        <div className={classes.buttonBox}>
                            {!props.loginPreloader && <button onClick={onSignInButtonClick}>Войти</button>}
                            {props.loginPreloader && <button disabled><img src={preloader} alt=''></img></button>}
                        </div>
                    </form>
                    <p className={classes.description}>Нет учётной записи? <NavLink to='/register'>Зарегистрируйтесь</NavLink></p>
                </div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        successRegistrationStatus: state.registerPage.successRegistrationStatus,
        invalidAuthError: state.loginPage.invalidAuthError,
        loginPreloader: state.loginPage.loginPreloader
    }
}


export default compose(connect(mapStateToProps, { setSuccessRegistrationStatus, signIn, setInvalidAuthError }))(Login)