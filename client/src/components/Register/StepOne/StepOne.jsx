import { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { setCurrentStep, setEmail, setErrors, setFirstName, setLastName, setPassword, setPhone, setSecondPassword } from '../../../store/register-reducer';
import { format } from '../../../utils/format';
import { validate } from '../../../utils/validate';
import classes from './StepOne.module.css';

export const StepOne = (props) => {

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
    // <div className={passwordLevel}></div>      надёжность пароля
    // <p className={classes.description}>Уже зарегистрированы? <NavLink to='/login'>Войдите</NavLink></p> редирект на логин

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

    // const onPhoneChange = (e) => {
    //     const value = e.target.value;
    //     const formattedValue = format(value, 'phone')
    //     props.setPhone(formattedValue)
    // }

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
        let errors = validate(props.firstName, props.lastName, props.email, props.password, props.secondPassword)
        console.log(errors)
        props.setErrors(errors)
        if (!errors.errorStatus) {
            props.setCurrentStep(2)
        }
    }
    return (
        <div className={classes.stepOne}>
            <p className={classes.header}>Регистрация</p>
            <p className={classes.currentStepHeader} >Шаг {props.currentStep} из 2</p>
            <form action="">
                {props.errors.firstNameError && <p className={classes.firstNameError}>{props.errors.firstNameError}</p>}
                {props.errors.lastNameError && <p className={classes.lastNameError}>{props.errors.lastNameError}</p>}
                {props.errors.emailError && <p className={classes.emailError}>{props.errors.emailError}</p>}
                {props.errors.passwordError && <p className={classes.passwordError}>{props.errors.passwordError}</p>}
                {props.errors.passwordError && <p className={classes.secondPasswordError}>{props.errors.passwordError}</p>}

                <label>Имя<span title='обязательное поле'>*</span></label>
                <input onChange={onFirstNameChange} value={props.firstName} placeholder='Иван'></input>
               
                <label>Фамилия<span title='обязательное поле'>*</span></label>
                <input onChange={onLastNameChange} value={props.lastName} placeholder='Иванов'></input>
                
                <label>Почта<span title='обязательное поле'>*</span></label>
                <input onChange={onEmailChange} value={props.email} placeholder='ivan123@email.com'></input>
                
                <label>Пароль<span title='обязательное поле'>*</span></label>
                <input onChange={onPasswordChange} value={props.password} type='password'></input>
                
                <label>Повторите пароль<span title='обязательное поле'>*</span></label>
                <input onChange={onSecondPasswordChange} value={props.secondPassword} type='password'></input>
                
                <div className={classes.buttonBox}>
                    <button onClick={onNextStepButtonClick}>Дальше</button>
                </div>
            </form>
            <p className={classes.description}>Уже зарегистрированы? <NavLink to='/login'>Войдите</NavLink></p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentStep: state.registerPage.currentStep,
        errors: state.registerPage.errors,
        firstName: state.registerPage.firstName,
        lastName: state.registerPage.lastName,
        email: state.registerPage.email,
        password: state.registerPage.password,
        secondPassword: state.registerPage.secondPassword
    }
}

export default compose(connect(mapStateToProps, { setErrors, setFirstName, setLastName, setPhone, setEmail, setPassword, setSecondPassword, setCurrentStep }))(StepOne)