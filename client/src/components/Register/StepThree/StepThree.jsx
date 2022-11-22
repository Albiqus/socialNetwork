import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { resetUserData, setCurrentStep, setSecretKey } from '../../../store/register-reducer';
import { registerUser } from '../../../thunks/registerUser';
import { format } from '../../../utils/common-utils/format';
import { validate } from '../../../utils/register-utils/validate/validateStepThree';
import { Preloader } from '../../Common/Preloader/Preloader';
import classes from './StepThree.module.css';

export const StepThree = (props) => {

    let [secretKeyError, setSecretKeyError] = useState(null)

    let [secretKeyVisibility, setSecretKeyVisibility] = useState(false)

    const onSecretKeyChange = (e) => {
        setSecretKeyError(null)
        const value = e.target.value;
        const formattedValue = format(value, 'secretKey')
        props.setSecretKey(formattedValue)
    }

    const onFirstEyeIconClick = () => {
        setSecretKeyVisibility(!secretKeyVisibility)
    }

    const onPrevStepButtonClick = () => {
        props.setCurrentStep(2)
    }

    const onNextStepButtonClick = (e) => {
        e.preventDefault()
        let errors = validate(props.userData.secretKey)
        setSecretKeyError(errors.secretKeyError)
        if (!errors.errorStatus) {
            props.resetUserData()
            props.registerUser(props.userData)
        }
    }
  
    return (
        <div className={classes.stepThree}>
            {props.registerPreloader && <div className={classes.preloader}><Preloader /></div>}
            {!props.registerPreloader && <div>
                <p className={classes.header}>Регистрация</p>
                <p className={classes.currentStepHeader} >Шаг {props.currentStep} из 3</p>
                <p className={classes.secretCodeHeader} >Почти! Придумайте секретное слово, которое будет использоваться в дальнейшем при возникновении проблем с логинизацией:</p>
                <div className={classes.ulBox}>
                    <ul>
                        <li>только буквы</li>
                        <li>заглавные буквы допустимы</li>
                        <li>минимум 4 символа</li>
                        <li>максимум 20 символов</li>
                    </ul>
                </div>
                <form>
                    {secretKeyError && <p className={`${classes.error} ${classes.secretKeyError}`}>{secretKeyError}</p>}

                    <label>Секретный ключ</label>
                    <input onChange={onSecretKeyChange} value={props.userData.secretKey} type={!secretKeyVisibility ? 'password' : 'text'} required></input>
                    <FontAwesomeIcon onClick={onFirstEyeIconClick} className={classes.eyeIcon} icon={secretKeyVisibility ? faEye : faEyeSlash} />
                    <div className={classes.buttonBox}>
                        <button onClick={onPrevStepButtonClick} type="button">Назад</button>
                        <button onClick={onNextStepButtonClick} type='submit'>Дальше</button>
                    </div>
                </form >
                <p className={classes.description}>Уже зарегистрированы? <NavLink to='/login'>Войдите</NavLink></p>
            </div>}
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        currentStep: state.registerPage.currentStep,
        userData: state.registerPage.userData,
        registerPreloader: state.registerPage.registerPreloader
    }
}
 
export default compose(connect(mapStateToProps, { setCurrentStep, setSecretKey, registerUser, resetUserData }))(StepThree)