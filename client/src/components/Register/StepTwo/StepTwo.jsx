import { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { setCity, setCountry, setCurrentStep, setDateOfBirth, setFemaleSelected, setGender, setMaleSelected, setMaritalStatus, setMarriedSelected, setPhone, setUnmarriedSelected } from '../../../store/register-reducer';
import { format } from '../../../utils/common-utils/format';
import { validate } from '../../../utils/register-utils/validate/validateStepTwo'
import classes from './StepTwo.module.css';

export const StepTwo = ({
    setCountry,
    setCity,
    setPhone,
    setDateOfBirth,
    maleSelected,
    femaleSelected,
    unmarriedSelected,
    marriedSelected,
    setFemaleSelected,
    setMaleSelected,
    setGender,
    setMarriedSelected,
    setUnmarriedSelected,
    setMaritalStatus,
    setCurrentStep,
    userData,
    currentStep
}) => {

    let [countryError, setCountryError] = useState(null)
    let [cityError, setCityError] = useState(null)
    let [phoneError, setPhoneError] = useState(null)
    let [genderError, setGenderError] = useState(null)
    let [maritalStatusError, setMaritalStatusError] = useState(null)

    const onCountryChange = (e) => {
        setCountryError(null)
        const value = e.target.value;
        const formattedValue = format(value, 'country')
        setCountry(formattedValue)
    }

    const onCityChange = (e) => {
        setCityError(null)
        const value = e.target.value;
        const formattedValue = format(value, 'city')
        setCity(formattedValue)
    }

    const onPhoneChange = (e) => {
        setPhoneError(null)
        const value = e.target.value;
        const formattedValue = format(value, 'phone')
        setPhone(formattedValue)
    }

    const onDateOfBirthChange = (e) => {
        const value = e.target.value;
        setDateOfBirth(value)
    }

    const genderStatuses = {
        maleSelected: maleSelected,
        femaleSelected: femaleSelected
    }

    const maritalStatusStatuses = {
        unmarriedSelected: unmarriedSelected,
        marriedSelected: marriedSelected
    }


    const onMaleRadioClick = () => {
        setGenderError(null)
        setFemaleSelected(false)
        setMaleSelected(true)
        setGender('Мужской')
    }

    const onFemaleRadioClick = () => {
        setGenderError(null)
        setMaleSelected(false)
        setFemaleSelected(true)
        setGender('Женский')
    }

    const onUnmarriedRadioClick = () => {
        setMaritalStatusError(null)
        setMarriedSelected(false)
        setUnmarriedSelected(true)
        setMaritalStatus(maleSelected ? 'Холост' : 'Не замужем')
    }

    const onMarriedRadioClick = () => {
        setMaritalStatusError(null)
        setUnmarriedSelected(false)
        setMarriedSelected(true)
        setMaritalStatus(femaleSelected ? 'Замужем' : 'Женат')
    }

    const onPrevStepButtonClick = () => {
        setCurrentStep(1)
    }

    const onNextStepButtonClick = (e) => {
        e.preventDefault()
        let errors = validate(userData.country, userData.city, userData.phone, genderStatuses, maritalStatusStatuses)

        setCountryError(errors.countryError)
        setCityError(errors.cityError)
        setPhoneError(errors.phoneError)
        setGenderError(errors.genderError)
        setMaritalStatusError(errors.maritalStatusError)

        if (!errors.errorStatus) setCurrentStep(3)
    }

    return (
        <div className={classes.stepTwo}>
            <p className={classes.header}>Регистрация</p>
            <p className={classes.currentStepHeader} >Шаг {currentStep} из 3</p>
            <form>
                {countryError && <p className={`${classes.error} ${classes.countryError}`}>{countryError}</p>}
                {cityError && <p className={`${classes.error} ${classes.cityError}`}>{cityError}</p>}
                {phoneError && <p className={`${classes.error} ${classes.phoneError}`}>{phoneError}</p>}
                {genderError && <p className={`${classes.error} ${classes.genderError}`}>{genderError}</p>}
                {maritalStatusError && <p className={`${classes.error} ${classes.maritalStatusError}`}>{maritalStatusError}</p>}

                <label>Страна</label>
                <input onChange={onCountryChange} value={userData.country} placeholder='Россия'></input>

                <label>Город</label>
                <input onChange={onCityChange} value={userData.city} type='city' placeholder='Москва'></input>

                <label>Номер телефона</label>
                <input onChange={onPhoneChange} value={userData.phone} placeholder='+71234567890'></input>

                <label>Дата рождения</label>
                <input onChange={onDateOfBirthChange} value={userData.dateOfBirth} type='date' className={classes.dateOfBirth}></input>

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
                    <button onClick={onPrevStepButtonClick} type="button">Назад</button>
                    <button onClick={onNextStepButtonClick} type='submit'>Дальше</button>
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