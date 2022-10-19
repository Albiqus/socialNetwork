import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { setCurrentStep, setSecretKey, setSecretKeyError } from '../../../store/register-reducer';
import { registerUser } from '../../../thunks/register-user';
import { format } from '../../../utils/format';
import { validate } from '../../../utils/validateStepThree';
import classes from './StepThree.module.css';

export const StepThree = (props) => {

    const onSecretKeyChange = (e) => {
        const value = e.target.value;
        const formattedValue = format(value, 'secretKey')
        props.setSecretKey(formattedValue)
    }

    const onPrevStepButtonClick = () => {
        props.setCurrentStep(2)
    }

    const onNextStepButtonClick = (e) => {
        e.preventDefault()
        let errors = validate(props.userData.secretKey)
        props.setSecretKeyError(errors.secretKeyError)
        if (!errors.errorStatus) {
            props.registerUser(props.userData)
            // console.log(props.userData)
        }
    }

    return (
        <div className={classes.stepThree}>
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
                {props.secretKeyError && <p className={`${classes.error} ${classes.secretKeyError}`}>{props.secretKeyError}</p>}

                <label>Секретный ключ</label>
                <input onChange={onSecretKeyChange} value={props.userData.secretKey} type='password' required></input>

                <div className={classes.buttonBox}>
                    <button onClick={onPrevStepButtonClick}>Назад</button>
                    <button onClick={onNextStepButtonClick} >Дальше</button>
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
        secretKeyError: state.registerPage.secretKeyError
    }
}

export default compose(connect(mapStateToProps, { setCurrentStep, setSecretKey, setSecretKeyError, registerUser }))(StepThree)