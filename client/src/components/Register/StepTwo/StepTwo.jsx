import { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { setCity, setCountry, setCurrentStep, setDateOfBirth, setFemaleSelected, setGender, setMaleSelected, setMaritalStatus, setMarriedSelected, setPhone, setUnmarriedSelected } from '../../../store/register-reducer';
import { format } from '../../../utils/format';
import { validate } from '../../../utils/validate/validateStepTwo';
import classes from './StepTwo.module.css';

export const StepTwo = (props) => {

    let [countryError, setCountryError] = useState(null)
    let [cityError, setCityError] = useState(null)
    let [phoneError, setPhoneError] = useState(null)
    let [genderError, setGenderError] = useState(null)
    let [maritalStatusError, setMaritalStatusError] = useState(null)

    const onCountryChange = (e) => {
        setCountryError(null)
        const value = e.target.value;
        const formattedValue = format(value, 'country')
        props.setCountry(formattedValue)
    }

    const onCityChange = (e) => {
        setCityError(null)
        const value = e.target.value;
        const formattedValue = format(value, 'city')
        props.setCity(formattedValue)
    }

    const onPhoneChange = (e) => {
        setPhoneError(null)
        const value = e.target.value;
        const formattedValue = format(value, 'phone')
        props.setPhone(formattedValue)
    }

    const onDateOfBirthChange = (e) => {
        const value = e.target.value;
        props.setDateOfBirth(value)
    }

    const genderStatuses = {
        maleSelected: props.maleSelected,
        femaleSelected: props.femaleSelected
    }

    const maritalStatusStatuses = {
        unmarriedSelected: props.unmarriedSelected,
        marriedSelected: props.marriedSelected
    }


    const onMaleRadioClick = () => {
        setGenderError(null)
        props.setFemaleSelected(false)
        props.setMaleSelected(true)
        props.setGender('мужской')
    }

    const onFemaleRadioClick = () => {
        setGenderError(null)
        props.setMaleSelected(false)
        props.setFemaleSelected(true)
        props.setGender('женский')
    }

    const onUnmarriedRadioClick = () => {
        setMaritalStatusError(null)
        props.setMarriedSelected(false)
        props.setUnmarriedSelected(true)
        props.setMaritalStatus('холост')
    }

    const onMarriedRadioClick = () => {
        setMaritalStatusError(null)
        props.setUnmarriedSelected(false)
        props.setMarriedSelected(true)
        props.setMaritalStatus('женат')
    }

    const onPrevStepButtonClick = () => {
        props.setCurrentStep(1)
    }

    const onNextStepButtonClick = (e) => {
        e.preventDefault()
        let errors = validate(props.userData.country, props.userData.city, props.userData.phone, genderStatuses, maritalStatusStatuses)
        setCountryError(errors.countryError)
        setCityError(errors.cityError)
        setPhoneError(errors.phoneError)
        setGenderError(errors.genderError)
        setMaritalStatusError(errors.maritalStatusError)
        if (!errors.errorStatus) {
            props.setCurrentStep(3)
        }
    }

    return (
        <div className={classes.stepTwo}>
            <p className={classes.header}>Регистрация</p>
            <p className={classes.currentStepHeader} >Шаг {props.currentStep} из 3</p>
            <form>
                {countryError && <p className={`${classes.error} ${classes.countryError}`}>{countryError}</p>}
                {cityError && <p className={`${classes.error} ${classes.cityError}`}>{cityError}</p>}
                {phoneError && <p className={`${classes.error} ${classes.phoneError}`}>{phoneError}</p>}
                {genderError && <p className={`${classes.error} ${classes.genderError}`}>{genderError}</p>}
                {maritalStatusError && <p className={`${classes.error} ${classes.maritalStatusError}`}>{maritalStatusError}</p>}

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
                        {props.maleSelected && <div className={classes.selected}></div>}
                    </div>
                    <label onClick={onMaleRadioClick}>мужской</label>
                    <div onClick={onFemaleRadioClick} className={classes.radio}>
                        {props.femaleSelected && <div className={classes.selected}></div>}
                    </div>
                    <label onClick={onFemaleRadioClick}>женский</label>
                </div>

                <label>Семейное положение<span title='обязательное поле'>*</span></label>
                <div className={classes.radioBox}>

                    <div onClick={onUnmarriedRadioClick} className={classes.radio}>
                        {props.unmarriedSelected && <div className={classes.selected}></div>}
                    </div>
                    <label onClick={onUnmarriedRadioClick}>{props.maleSelected ? 'холост' : 'не замужем'}</label>

                    <div onClick={onMarriedRadioClick} className={classes.radio}>
                        {props.marriedSelected && <div className={classes.selected}></div>}
                    </div>
                    <label onClick={onMarriedRadioClick}>{props.maleSelected ? 'женат' : 'замужем'}</label>

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
        maleSelected: state.registerPage.maleSelected,
        femaleSelected: state.registerPage.femaleSelected,
        unmarriedSelected: state.registerPage.unmarriedSelected,
        marriedSelected: state.registerPage.marriedSelected
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
    setMaleSelected,
    setFemaleSelected,
    setUnmarriedSelected,
    setMarriedSelected
}))(StepTwo)