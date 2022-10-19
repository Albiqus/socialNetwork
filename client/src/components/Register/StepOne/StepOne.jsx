import { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { setCurrentStep, setEmail, setEmailError, setFirstName, setFirstNameError, setLastName, setLastNameError, setPassword, setPasswordError, setPhone, setSecondPassword } from '../../../store/register-reducer';
import { format } from '../../../utils/format';
import { validate } from '../../../utils/validateStepOne';
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


    const onFirstNameChange = (e) => {
        props.setFirstNameError(null)
        const value = e.target.value
        const formattedValue = format(value, 'first_name')
        props.setFirstName(formattedValue)
    }

    const onLastNameChange = (e) => {
        props.setLastNameError(null)
        const value = e.target.value;
        const formattedValue = format(value, 'last_name')
        props.setLastName(formattedValue)
    }

    const onEmailChange = (e) => {
        props.setEmailError(null)
        const value = e.target.value;
        const formattedValue = format(value, 'email')
        props.setEmail(formattedValue)
    }

    const onPasswordChange = (e) => {
        props.setPasswordError(null)
        const value = e.target.value;
        props.setPassword(value)
        setPasswordLength(value.length)
    }

    const onSecondPasswordChange = (e) => {
        props.setPasswordError(null)
        const value = e.target.value;
        props.setSecondPassword(value)
    }

    const onNextStepButtonClick = (e) => {
        e.preventDefault()
        let errors = validate(props.userData.firstName, props.userData.lastName, props.userData.email, props.userData.password, props.userData.secondPassword)
        props.setFirstNameError(errors.firstNameError)
        props.setLastNameError(errors.lastNameError)
        props.setEmailError(errors.emailError)
        props.setPasswordError(errors.passwordError)
        if (!errors.errorStatus) {
            props.setCurrentStep(2)
        }
    }

    return (
        <div className={classes.stepOne}>
            <p className={classes.header}>Регистрация</p>
            <p className={classes.currentStepHeader} >Шаг {props.currentStep} из 3</p>
            <form>
                {props.firstNameError && <p className={`${classes.error} ${classes.firstNameError}`}>{props.firstNameError}</p>}
                {props.lastNameError && <p className={`${classes.error} ${classes.lastNameError}`}>{props.lastNameError}</p>}
                {props.emailError && <p className={`${classes.error} ${classes.emailError}`}>{props.emailError}</p>}
                {props.passwordError && <p className={`${classes.error} ${classes.passwordError}`}> {props.passwordError}</p >}
                {props.passwordError && <p className={`${classes.error} ${classes.secondPasswordError}`}> {props.passwordError}</p >}

                <label>Имя<span title='обязательное поле'>*</span></label>
                <input onChange={onFirstNameChange} value={props.userData.firstName} placeholder='Иван' required></input>

                <label>Фамилия<span title='обязательное поле'>*</span></label>
                <input onChange={onLastNameChange} value={props.userData.lastName} placeholder='Иванов' required></input>

                <label>Почта<span title='обязательное поле'>*</span></label>
                <input onChange={onEmailChange} value={props.userData.email} placeholder='ivan123@email.com' required></input>

                <label>Пароль<span title='обязательное поле'>*</span></label>
                <input onChange={onPasswordChange} value={props.userData.password} type='password' required></input>
                
                <div className={classes.passwordLevelBox}>
                    <div className={passwordLevel}></div>
                </div>

                <label>Повторите пароль<span title='обязательное поле'>*</span></label>
                <input onChange={onSecondPasswordChange} value={props.userData.secondPassword} type='password' required></input>

                <div className={classes.buttonBox}>
                    <button onClick={onNextStepButtonClick}>Дальше</button>
                </div>
            </form >
            <p className={classes.description}>Уже зарегистрированы? <NavLink to='/login'>Войдите</NavLink></p>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        currentStep: state.registerPage.currentStep,
        userData: state.registerPage.userData,
        firstNameError: state.registerPage.firstNameError,
        lastNameError: state.registerPage.lastNameError,
        emailError: state.registerPage.emailError,
        passwordError: state.registerPage.passwordError,
    }
}

export default compose(connect(mapStateToProps, {
    setCurrentStep,
    setFirstName,
    setLastName,
    setPhone, setEmail,
    setPassword,
    setSecondPassword,
    setFirstNameError,
    setLastNameError,
    setEmailError,
    setPasswordError
}))(StepOne)