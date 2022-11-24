
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { setCurrentStep, setEmail, setExistingUserError, setFirstName, setLastName, setPassword,  setPhone, setSecondPassword } from '../../../store/register-reducer';
import { checkExistingUser } from '../../../thunks/register-thunks/checkExistingUser';
import { format } from '../../../utils/common-utils/format';
import { validate } from '../../../utils/register-utils/validate/validateStepOne';
import classes from './StepOne.module.css';

const StepOne = ({ setFirstName, setLastName, setExistingUserError, setEmail, setPassword, setSecondPassword, userData, checkExistingUser, currentStep, existingUserError }) => {
              
    let [passwordLength, setPasswordLength] = useState(null)

    let [firstNameError, setFirstNameError] = useState(null)
    let [lastNameError, setLastNameError] = useState(null)
    let [emailError, setEmailError] = useState(null)
    let [passwordError, setPasswordError] = useState(null)
    let [firstPasswordVisibility, setFirstPasswordVisibility] = useState(false)
    let [secondPasswordVisibility, setSecondPasswordVisibility] = useState(false)

    let passwordLevel = classes.passwordLevel
    if (passwordLength >= 1 && passwordLength < 6) passwordLevel += ` ${classes.empty}`
    if (passwordLength >= 6 && passwordLength < 12) passwordLevel += ` ${classes.low}`
    if (passwordLength >= 12 && passwordLength < 18) passwordLevel += ` ${classes.average}`
    if (passwordLength >= 18) passwordLevel += ` ${classes.strong}`
    
    
    const onFirstNameChange = (e) => {
        setFirstNameError(null)
        const value = e.target.value
        const formattedValue = format(value, 'first_name')
        setFirstName(formattedValue)
    }

    const onLastNameChange = (e) => {
        setLastNameError(null)
        const value = e.target.value;
        const formattedValue = format(value, 'last_name')
        setLastName(formattedValue)
    }

    const onEmailChange = (e) => {
        setExistingUserError(null)
        setEmailError(null)
        const value = e.target.value;
        const formattedValue = format(value, 'email')
        setEmail(formattedValue)
    }

    const onPasswordChange = (e) => {
        setPasswordError(null)
        const value = e.target.value;
        setPassword(value)
        setPasswordLength(value.length)
    }

    const onFirstEyeIconClick = () => {
        setFirstPasswordVisibility(!firstPasswordVisibility)
    }

    const onSecondPasswordChange = (e) => {
        setPasswordError(null)

        const value = e.target.value;
        setSecondPassword(value)
    }

    const onSecondEyeIconClick = () => {
        setSecondPasswordVisibility(!secondPasswordVisibility)
    }

    const onNextStepButtonClick = (e) => {
        e.preventDefault()

        let errors = validate(userData.firstName, userData.lastName, userData.email, userData.password, userData.secondPassword)
        setFirstNameError(errors.firstNameError)
        setLastNameError(errors.lastNameError)
        setEmailError(errors.emailError)
        setPasswordError(errors.passwordError)

        if (!errors.errorStatus) checkExistingUser(userData.email)
    }

    return (
        <div className={classes.stepOne}>
            <p className={classes.header}>Регистрация</p>
            <p className={classes.currentStepHeader} >Шаг {currentStep} из 3</p>
            <form>
                {firstNameError && <p className={`${classes.error} ${classes.firstNameError}`}>{firstNameError}</p>}
                {lastNameError && <p className={`${classes.error} ${classes.lastNameError}`}>{lastNameError}</p>}
                {emailError && <p className={`${classes.error} ${classes.emailError}`}>{emailError}</p>}
                {passwordError && <p className={`${classes.error} ${classes.passwordError}`}> {passwordError}</p >}
                {passwordError && <p className={`${classes.error} ${classes.secondPasswordError}`}> {passwordError}</p >}
                {existingUserError && <p className={`${classes.error} ${classes.emailError}`}> {existingUserError}</p >}
                
                <label>Имя<span title='обязательное поле'>*</span></label>
                <input onChange={onFirstNameChange} value={userData.firstName} placeholder='Иван' required></input>

                <label>Фамилия<span title='обязательное поле'>*</span></label>
                <input onChange={onLastNameChange} value={userData.lastName} placeholder='Иванов' required></input>

                <label>Почта<span title='обязательное поле'>*</span></label>
                <input onChange={onEmailChange} value={userData.email} placeholder='ivan123@email.com' required></input>

                <label>Пароль<span title='обязательное поле'>*</span></label>
                <input onChange={onPasswordChange} value={userData.password} type={!firstPasswordVisibility ? 'password' : 'text'} required></input>

                <FontAwesomeIcon onClick={onFirstEyeIconClick} className={classes.firstEyeIcon} icon={firstPasswordVisibility ? faEye : faEyeSlash} />
                <div className={classes.passwordLevelBox}>
                    <div className={passwordLevel}></div>
                </div>

                <label>Повторите пароль<span title='обязательное поле'>*</span></label>
                <input onChange={onSecondPasswordChange} value={userData.secondPassword} type={!secondPasswordVisibility ? 'password' : 'text'} required></input>
                <FontAwesomeIcon onClick={onSecondEyeIconClick} className={classes.secondEyeIcon} icon={secondPasswordVisibility ? faEye : faEyeSlash} />
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
        existingUserError: state.registerPage.existingUserError
    }
}

export default compose(connect(mapStateToProps, {
    setCurrentStep,
    setFirstName,
    setLastName,
    setPhone,
    setEmail,
    setPassword,
    setSecondPassword,
    checkExistingUser,
    setExistingUserError
}))(StepOne)