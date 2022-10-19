import { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { setCity, setCityError, setCountry, setCountryError, setCurrentStep, setDateOfBirth, setGender, setGenderError, setMaritalStatus, setMaritalStatusError, setPhone, setPhoneError } from '../../../store/register-reducer';
import { format } from '../../../utils/format';
import { validate } from '../../../utils/validateStepTwo';
import classes from './StepTwo.module.css';

export const StepTwo = (props) => {

    const onCountryChange = (e) => {
        props.setCountryError(null)
        const value = e.target.value;
        const formattedValue = format(value, 'country')
        props.setCountry(formattedValue)
    }

    const onCityChange = (e) => {
        props.setCityError(null)
        const value = e.target.value;
        const formattedValue = format(value, 'city')
        props.setCity(formattedValue)
    }

    const onPhoneChange = (e) => {
        props.setPhoneError(null)
        const value = e.target.value;
        const formattedValue = format(value, 'phone')
        props.setPhone(formattedValue)
    }

    const onDateOfBirthChange = (e) => {
        const value = e.target.value;
        props.setDateOfBirth(value)
    }

    const [maleSelected, setMaleSelected] = useState(false)
    const [femaleSelected, setFemaleSelected] = useState(false)
    const [unmarriedSelected, setUnmarriedSelected] = useState(false)
    const [marriedSelected, setMarriedSelected] = useState(false)

    const genderStatuses = {
        maleSelected,
        femaleSelected
    }

    const maritalStatusStatuses = {
        unmarriedSelected,
        marriedSelected
    }


    const onMaleRadioClick = () => {
        props.setGenderError(null)
        setFemaleSelected(false)
        setMaleSelected(true)
        props.setGender('мужской')
    }

    const onFemaleRadioClick = () => {
        props.setGenderError(null)
        setMaleSelected(false)
        setFemaleSelected(true)
        props.setGender('женский')
    }

    const onUnmarriedRadioClick = () => {
        props.setMaritalStatusError(null)
        setMarriedSelected(false)
        setUnmarriedSelected(true)
        props.setMaritalStatus('холост')
    }

    const onMarriedRadioClick = () => {
        props.setMaritalStatusError(null)
        setUnmarriedSelected(false)
        setMarriedSelected(true)
        props.setMaritalStatus('женат')
    }

    const onPrevStepButtonClick = () => {
        props.setCurrentStep(1)
    }

    const onNextStepButtonClick = (e) => {
        e.preventDefault()
        let errors = validate(props.userData.country, props.userData.city, props.userData.phone, genderStatuses, maritalStatusStatuses)
        props.setCountryError(errors.countryError)
        props.setCityError(errors.cityError)
        props.setPhoneError(errors.phoneError)
        props.setGenderError(errors.genderError)
        props.setMaritalStatusError(errors.maritalStatusError)
        if (!errors.errorStatus) {
            props.setCurrentStep(3)
        }
    }

    return (
        <div className={classes.stepTwo}>
            <p className={classes.header}>Регистрация</p>
            <p className={classes.currentStepHeader} >Шаг {props.currentStep} из 3</p>
            <form>
                {props.countryError && <p className={`${classes.error} ${classes.countryError}`}>{props.countryError}</p>}
                {props.cityError && <p className={`${classes.error} ${classes.cityError}`}>{props.cityError}</p>}
                {props.phoneError && <p className={`${classes.error} ${classes.phoneError}`}>{props.phoneError}</p>}
                {props.genderError && <p className={`${classes.error} ${classes.genderError}`}>{props.genderError}</p>}
                {props.maritalStatusError && <p className={`${classes.error} ${classes.maritalStatusError}`}>{props.maritalStatusError}</p>}

                <label>Страна</label>
                <input onChange={onCountryChange} value={props.userData.country} placeholder='Россия'></input>

                <label>Город</label>
                <input onChange={onCityChange} value={props.userData.city} type='city' placeholder='Москва'></input>

                <label>Номер телефона</label>
                <input onChange={onPhoneChange} value={props.userData.phone} placeholder='+71234567890'></input>

                <label>Дата рождения</label>
                <input onChange={onDateOfBirthChange} value={props.userData.dateOfBirth} type='date'></input>

                <label>Пол<span title='обязательное поле'>*</span></label>
                <div className={classes.radioBox}>
                    <div onClick={onMaleRadioClick} className={classes.radio}>
                        {maleSelected && <div className={classes.selected}></div>}
                    </div>
                    <label onClick={onMaleRadioClick}>мужской</label>
                    <div onClick={onFemaleRadioClick} className={classes.radio}>
                        {femaleSelected && <div className={classes.selected}></div>}
                    </div>
                    <label onClick={onFemaleRadioClick}>женский</label>
                </div>

                <label>Семейное положение<span title='обязательное поле'>*</span></label>
                <div className={classes.radioBox}>
                    <div onClick={onUnmarriedRadioClick} className={classes.radio}>
                        {unmarriedSelected && <div className={classes.selected}></div>}
                    </div>
                    <label onClick={onUnmarriedRadioClick}>{maleSelected ? 'холост' : 'не замужем'}</label>
                    <div onClick={onMarriedRadioClick} className={classes.radio}>
                        {marriedSelected && <div className={classes.selected}></div>}
                    </div>
                    <label onClick={onMarriedRadioClick}>{maleSelected ? 'женат' : 'замужем'}</label>
                </div>

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
        countryError: state.registerPage.countryError,
        cityError: state.registerPage.cityError,
        phoneError: state.registerPage.phoneError,
        genderError: state.registerPage.genderError,
        maritalStatusError: state.registerPage.maritalStatusError
    }
}

export default compose(connect(mapStateToProps, {
    setCurrentStep,
    setCountry,
    setCity,
    setPhone,
    setDateOfBirth,
    setGender,
    setMaritalStatus,
    setCountryError,
    setCityError,
    setPhoneError,
    setGenderError,
    setMaritalStatusError
}))(StepTwo)