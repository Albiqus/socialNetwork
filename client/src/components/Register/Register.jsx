import { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { setEmail, setErrors, setFirstName, setLastName, setPassword, setPhone, setSecondPassword } from '../../store/register-reducer';
import { format } from '../../utils/format';
import { validate } from '../../utils/validate';
import classes from './Register.module.css';

export const Register = (props) => {

    let [passwordLength, setPasswordLength] = useState(null)

    let passwordLevel = classes.passwordLevel
    if (passwordLength >= 1 && passwordLength < 6) {
        passwordLevel += ` ${classes.empty}`
    }
    if (passwordLength >= 6 && passwordLength < 12) {
        passwordLevel += ` ${classes.low}`
    }
    if (passwordLength >= 12 && passwordLength < 18) {
        passwordLevel += ` ${classes.average}`
    }
    if (passwordLength >= 18) {
        passwordLevel += ` ${classes.strong}`
    }

    const onFirstNameChange = (e) => {
        const value = e.target.value
        const formattedValue = format(value, 'first_name')
        props.setFirstName(formattedValue)
    }

    const onLastNameChange = (e) => {
        const value = e.target.value;
        const formattedValue = format(value, 'last_name')
        props.setLastName(formattedValue)
    }

    const onPhoneChange = (e) => {
        const value = e.target.value;
        const formattedValue = format(value, 'phone')
        props.setPhone(formattedValue)
    }

    const onEmailChange = (e) => {
        const value = e.target.value;
        const formattedValue = format(value, 'email')
        props.setEmail(formattedValue)
    }

    const onPasswordChange = (e) => {
        const value = e.target.value;
        props.setPassword(value)
        setPasswordLength(value.length)
    }
    
    const onSecondPasswordChange = (e) => {
        const value = e.target.value;
        props.setSecondPassword(value)
    }

    const onNextStepButtonClick = (e) => {
        e.preventDefault()
        let errors = validate(props.firstName, props.lastName, props.phone, props.email, props.password, props.secondPassword )
        props.setErrors(errors)
        if (!errors.errorStatus) {
            console.log('дальше')
        }
    }
    return (
        <div className={classes.login}>
            <p className={classes.header}>Регистрация</p>
            <form action="">
                <label>Имя*</label>
                <input onChange={onFirstNameChange} value={props.firstName} type="text" placeholder='Иван' required />
                {props.errors.firstNameError && <p className={classes.error}>{props.errors.firstNameError}</p>}
                <label>Фамилия*</label>
                <input onChange={onLastNameChange} value={props.lastName} type="text" placeholder='Иванов' required />
                {props.errors.lastNameError && <p className={classes.error}>{props.errors.lastNameError}</p>}
                <label>Номер телефона</label>
                <input onChange={onPhoneChange} value={props.phone} type="text" placeholder='+79991112222' />
                {props.errors.phoneError && <p className={classes.error}>{props.errors.phoneError}</p>}
                <label>Почта*</label>
                <input onChange={onEmailChange} value={props.email} type="text" placeholder='ivan123@email.com' required />
                {props.errors.emailError && <p className={classes.error}>{props.errors.emailError}</p>}
                <label>Пароль*</label>
                <input onChange={onPasswordChange} value={props.password} type="password" required />
                <div className={passwordLevel}></div>
                {props.errors.passwordError && <p className={classes.error}>{props.errors.passwordError}</p>}
                <label>Повторите пароль*</label>
                <input onChange={onSecondPasswordChange} value={props.secondPassword} type="password" required />
                {props.errors.passwordError && <p className={classes.error}>{props.errors.passwordError}</p>}
                <button onClick={onNextStepButtonClick} type='submit'>Дальше</button>
            </form>
            <p className={classes.description}>Уже зарегистрированы? <NavLink to='/login'>Войдите</NavLink></p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        errors: state.registerPage.errors,
        firstName: state.registerPage.firstName,
        lastName: state.registerPage.lastName,
        phone: state.registerPage.phone,
        email: state.registerPage.email,
        password: state.registerPage.password,
        secondPassword: state.registerPage.secondPassword
    }
}

export default compose(connect(mapStateToProps, { setErrors, setFirstName, setLastName, setPhone, setEmail, setPassword, setSecondPassword }))(Register)