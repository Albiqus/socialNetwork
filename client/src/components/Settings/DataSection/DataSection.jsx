import { useState } from 'react';
import { connect } from 'react-redux';
import { setCity, setCountry, setDateOfBirth, setFirstName, setGender, setLastName, setMaritalStatus, setPhone } from '../../../store/settings-reducer';
import { updateLastActivityTime } from '../../../thunks/common-thunks/updateLastActivityTime';
import { getUserData } from '../../../thunks/settings-thunks/getUserData';
import { updateUserData } from '../../../thunks/settings-thunks/updateUserData';
import { format } from '../../../utils/common-utils/format';
import { validate } from '../../../utils/settings-utils/validateDataSection';
import { SectionPreloader } from '../SectionPreloader/SectionPreloader';
import classes from './DataSection.module.css';
import { SuccessMessage } from './SuccessDataUpdateMessage/SuccessMessage';

const DataSection = ({
    dataSettings,
    getUserData,
    dataSectionPreloader,
    setFirstName,
    setLastName,
    setCountry,
    setCity,
    setPhone,
    setDateOfBirth,
    setGender,
    setMaritalStatus,
    updateUserData,
    successDataUpdate,
    updateLastActivityTime}) => {

    const authUserId = localStorage.getItem('id')
    if (!dataSettings) getUserData(authUserId)

    let [firstNameError, setFirstNameError] = useState(null)
    let [lastNameError, setLastNameError] = useState(null)
    let [countryError, setCountryError] = useState(null)
    let [cityError, setCityError] = useState(null)
    let [phoneError, setPhoneError] = useState(null)


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

    const onMaleRadioClick = () => {
        setGender('Мужской')
    }

    const onFemaleRadioClick = () => {
        setGender('Женский')
    }

    const onUnmarriedRadioClick = () => {
        setMaritalStatus(dataSettings.gender === 'Мужской' ? 'Холост' : 'Не замужем')
    }

    const onMarriedRadioClick = () => {
        setMaritalStatus(dataSettings.gender === 'Женский' ? 'Замужем' : 'Женат')
    }

    const onUpdateDataSettingsButtonClick = (e) => {
        e.preventDefault()
        updateLastActivityTime(authUserId)

        let errors = validate(dataSettings.firstName, dataSettings.lastName, dataSettings.country, dataSettings.city, dataSettings.phone)
        setFirstNameError(errors.firstNameError)
        setLastNameError(errors.lastNameError)
        setCountryError(errors.countryError)
        setCityError(errors.cityError)
        setPhoneError(errors.phoneError)

        if (!errors.errorStatus) {
            updateUserData(authUserId,
                dataSettings.firstName,
                dataSettings.lastName,
                dataSettings.country,
                dataSettings.city,
                dataSettings.phone,
                dataSettings.dateOfBirth,
                dataSettings.gender,
                dataSettings.maritalStatus)
        }

    }

    return (
        <div className={classes.dataSectionBox}>
            {dataSectionPreloader && <SectionPreloader />}
            {successDataUpdate && <SuccessMessage />}
            {!dataSectionPreloader &&
                <div>
                    <form>
                        {firstNameError && <p className={`${classes.error} ${classes.firstNameError}`}>{firstNameError}</p>}
                        {lastNameError && <p className={`${classes.error} ${classes.lastNameError}`}>{lastNameError}</p>}
                        {countryError && <p className={`${classes.error} ${classes.countryError}`}>{countryError}</p>}
                        {cityError && <p className={`${classes.error} ${classes.cityError}`}> {cityError}</p >}
                        {phoneError && <p className={`${classes.error} ${classes.phoneError}`}> {phoneError}</p >}

                        <label>Имя<span title='обязательное поле'>*</span></label>
                        <input onChange={onFirstNameChange} value={dataSettings?.firstName} placeholder='Иван' required></input>

                        <label>Фамилия<span title='обязательное поле'>*</span></label>
                        <input onChange={onLastNameChange} value={dataSettings?.lastName} placeholder='Иванов' required></input>

                        <label>Страна</label>
                        <input onChange={onCountryChange} value={dataSettings?.country} placeholder='Россия'></input>

                        <label>Город</label>
                        <input onChange={onCityChange} value={dataSettings?.city} type='city' placeholder='Москва'></input>

                        <label>Номер телефона</label>
                        <input onChange={onPhoneChange} value={dataSettings?.phone} placeholder='+71234567890'></input>

                        <label>Дата рождения</label>
                        <input onChange={onDateOfBirthChange} value={dataSettings?.dateOfBirth} type='date' className={classes.dateOfBirth}></input>

                        <label>Пол<span title='обязательное поле'>*</span></label>
                        <div className={classes.radioBox}>
                            <div onClick={onMaleRadioClick} className={classes.radio}>
                                {dataSettings?.gender === 'Мужской' && <div className={classes.selected}></div>}
                            </div>
                            <label onClick={onMaleRadioClick}>мужской</label>
                            <div onClick={onFemaleRadioClick} className={classes.radio}>
                                {dataSettings?.gender === 'Женский' && <div className={classes.selected}></div>}
                            </div>
                            <label onClick={onFemaleRadioClick}>женский</label>
                        </div>

                        <label>Семейное положение<span title='обязательное поле'>*</span></label>
                        <div className={classes.radioBox}>
                            <div onClick={onUnmarriedRadioClick} className={classes.radio}>
                                {dataSettings?.maritalStatus === "Холост" && <div className={classes.selected}></div>}
                                {dataSettings?.maritalStatus === "Не замужем" && <div className={classes.selected}></div>}
                            </div>
                            <label onClick={onUnmarriedRadioClick}>{dataSettings?.gender === 'Мужской' ? 'холост' : 'не замужем'}</label>
                            <div onClick={onMarriedRadioClick} className={classes.radio}>
                                {dataSettings?.maritalStatus === "Женат" && <div className={classes.selected}></div>}
                                {dataSettings?.maritalStatus === "Замужем" && <div className={classes.selected}></div>}
                            </div>
                            <label onClick={onMarriedRadioClick}>{dataSettings?.gender === 'Мужской' ? 'женат' : 'замужем'}</label>
                        </div>
                        <div className={classes.buttonBox}>
                            <button onClick={onUpdateDataSettingsButtonClick} type='submit'>Сохранить</button>
                        </div>
                    </form >
                </div>

            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dataSettings: state.settingsPage.dataSettings,
        dataSectionPreloader: state.settingsPage.dataSectionPreloader,
        successDataUpdate: state.settingsPage.successDataUpdate,
    }
}

export default connect(mapStateToProps, {
    getUserData,
    setFirstName,
    setLastName,
    setCountry,
    setCity,
    setPhone,
    setDateOfBirth,
    setGender,
    setMaritalStatus,
    updateUserData,
    updateLastActivityTime
})(DataSection)