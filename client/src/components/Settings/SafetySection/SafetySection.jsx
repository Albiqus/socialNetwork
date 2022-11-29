import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setCurrentPassword, setEmail, setExistingUserError, setInvalidPasswordError, setNewPassword, setSecondNewPassword, setSecondSecretKey, setSecretKey } from '../../../store/settings-reducer';
import { deleteUser } from '../../../thunks/settings-thunks/deleteUser';
import { getUserSafetySettings } from '../../../thunks/settings-thunks/getUserSafetySettings';
import { updateUserSafetySettings } from '../../../thunks/settings-thunks/updateUserSafetySettings';
import { format } from '../../../utils/common-utils/format';
import { validate } from '../../../utils/settings-utils/validateSafetySection';
import { SuccessMessage } from '../DataSection/SuccessDataUpdateMessage/SuccessMessage';
import { SectionPreloader } from '../SectionPreloader/SectionPreloader';
import classes from './SafetySection.module.css';

const SafetySection = ({
    safetySettings,
    setEmail,
    setNewPassword,
    setSecondNewPassword,
    setSecretKey,
    setCurrentPassword,
    setExistingUserError,
    invalidPasswordError,
    existingUserError,
    getUserSafetySettings,
    safetySectionPreloader,
    setSecondSecretKey,
    updateUserSafetySettings,
    successSafetyUpdate,
    setInvalidPasswordError,
    deleteUser }) => {

    const authUserId = localStorage.getItem('id')
    if (!safetySettings) getUserSafetySettings(authUserId)


    let [passwordLength, setPasswordLength] = useState(null)
    let [firstPasswordVisibility, setFirstPasswordVisibility] = useState(false)
    let [secondPasswordVisibility, setSecondPasswordVisibility] = useState(false)
    let [newSecretKeyVisibility, setNewSecretKeyVisibility] = useState(false)
    let [secondNewSecretKeyVisibility, setSecondNewSecretKeyVisibility] = useState(false)
    let [currentPasswordVisibility, setCurrentPasswordVisibility] = useState(false)

    let [passwordSettingsVisibility, setPasswordSettingsVisibility] = useState(false)
    let [secretKeySettingsVisibility, setSecretKeySettingsVisibility] = useState(false)
    let [deleteAccSettingsVisibility, setDeleteAccSettingsVisibility] = useState(false)

    let [removalAccStatus, setRemovalAccStatus] = useState(null)

    let [emailError, setEmailError] = useState(null)
    let [passwordError, setPasswordError] = useState(null)
    let [secretKeyError, setSecretKeyError] = useState(null)

    let passwordLevel = classes.passwordLevel
    if (passwordLength >= 1 && passwordLength < 6) passwordLevel += ` ${classes.empty}`
    if (passwordLength >= 6 && passwordLength < 12) passwordLevel += ` ${classes.low}`
    if (passwordLength >= 12 && passwordLength < 18) passwordLevel += ` ${classes.average}`
    if (passwordLength >= 18) passwordLevel += ` ${classes.strong}`

    const onEmailChange = (e) => {
        setExistingUserError(null)
        setEmailError(null)
        const value = e.target.value;
        const formattedValue = format(value, 'email')
        setEmail(formattedValue)
    }

    const onPasswordSettingsButtonClick = () => {
        setDeleteAccSettingsVisibility(false)
        setRemovalAccStatus(null)
        setPasswordSettingsVisibility(true)
    }

    const onNewPasswordChange = (e) => {
        setPasswordError(null)
        const value = e.target.value;
        setNewPassword(value)
        setPasswordLength(value.length)
    }

    const onFirstEyeIconClick = () => {
        setFirstPasswordVisibility(!firstPasswordVisibility)
    }

    const onSecondNewPasswordChange = (e) => {
        setPasswordError(null)

        const value = e.target.value;
        setSecondNewPassword(value)
    }

    const onSecondEyeIconClick = () => {
        setSecondPasswordVisibility(!secondPasswordVisibility)
    }

    const onSecretKeySettingsButtonClick = () => {
        setDeleteAccSettingsVisibility(false)
        setRemovalAccStatus(null)
        setSecretKeySettingsVisibility(true)
    }

    const onNewSecretKeyChange = (e) => {
        setSecretKeyError(null)
        const value = e.target.value;
        const formattedValue = format(value, 'secretKey')
        setSecretKey(formattedValue)
    }

    const onThirdEyeIconClick = () => {
        setNewSecretKeyVisibility(!newSecretKeyVisibility)
    }

    const onSecondNewSecretKeyChange = (e) => {
        setSecretKeyError(null)
        const value = e.target.value;
        const formattedValue = format(value, 'secretKey')
        setSecondSecretKey(formattedValue)
    }

    const onFourthEyeIconClick = () => {
        setSecondNewSecretKeyVisibility(!secondNewSecretKeyVisibility)
    }

    const onDeleteAccSettingsButtonClick = () => {
        setPasswordSettingsVisibility(false)
        setSecretKeySettingsVisibility(false)
        setDeleteAccSettingsVisibility(true)
    }

    const onYesRadioClick = () => {
        setRemovalAccStatus('remove')
    }

    const onNoRadioClick = () => {
        setDeleteAccSettingsVisibility(false)
        setRemovalAccStatus(null)
    }

    const onCurrentPasswordChange = (e) => {
        setInvalidPasswordError(null)
        const value = e.target.value;
        setCurrentPassword(value)
    }

    const onFifthEyeIconClick = () => {
        setCurrentPasswordVisibility(!currentPasswordVisibility)
    }


    const onUpdateSafetySettingsButtonClick = (e) => {
        e.preventDefault()
        console.log('хуй')
        let errors = validate(safetySettings.email, safetySettings.newPassword, safetySettings.secondNewPassword, safetySettings.newSecretKey, safetySettings.secondNewSecretKey)

        setEmailError(errors.emailError)
        setPasswordError(errors.passwordError)
        setSecretKeyError(errors.secretKeyError)

        if (!errors.errorStatus) {
            removalAccStatus !== 'remove' && updateUserSafetySettings(
                safetySettings.email,
                safetySettings.newPassword,
                safetySettings.newSecretKey,
                safetySettings.currentPassword,
                authUserId
            )
            console.log('ща удал..')
            removalAccStatus === 'remove' && deleteUser(authUserId, safetySettings.currentPassword)
        }
    }

    return (
        <div className={classes.safetySectionBox}>
            {safetySectionPreloader && <SectionPreloader />}
            {successSafetyUpdate && <SuccessMessage />}
            {!safetySectionPreloader &&
                <form>
                    {emailError && <p className={`${classes.error} ${classes.emailError}`}>{emailError}</p>}
                    {existingUserError && <p className={`${classes.error} ${classes.emailError}`}>{existingUserError}</p >}
                    <label>Почта</label>
                    <input onChange={onEmailChange} value={safetySettings?.email} placeholder='ivan123@email.com' disabled={deleteAccSettingsVisibility && true}></input>


                    {!passwordSettingsVisibility && <p onClick={onPasswordSettingsButtonClick} className={classes.showPasswordSettings}>Изменить пароль</p>}
                    {passwordSettingsVisibility &&
                        <div className={classes.passwordSettings}>
                            {passwordError && <p className={`${classes.error} ${classes.passwordError}`}> {passwordError}</p >}
                            {passwordError && <p className={`${classes.error} ${classes.secondPasswordError}`}> {passwordError}</p >}

                            <label>Новый пароль</label>
                            <input onChange={onNewPasswordChange} value={safetySettings?.newPassword} type={!firstPasswordVisibility ? 'password' : 'text'} ></input>
                            <FontAwesomeIcon onClick={onFirstEyeIconClick} className={classes.firstEyeIcon} icon={firstPasswordVisibility ? faEye : faEyeSlash} />
                            <div className={classes.passwordLevelBox}>
                                <div className={passwordLevel}></div>
                            </div>

                            <label>Повторите пароль</label>
                            <input onChange={onSecondNewPasswordChange} value={safetySettings?.secondNewPassword} type={!secondPasswordVisibility ? 'password' : 'text'}></input>
                            <FontAwesomeIcon onClick={onSecondEyeIconClick} className={classes.secondEyeIcon} icon={secondPasswordVisibility ? faEye : faEyeSlash} />
                        </div>}


                    {!secretKeySettingsVisibility && <p onClick={onSecretKeySettingsButtonClick} className={classes.showSecretKeySettings}>Изменить секретный ключ</p>}
                    {secretKeySettingsVisibility &&
                        <div className={classes.secretKeySettings}>
                            {secretKeyError && <p className={`${classes.error} ${classes.secretKeyError}`}> {secretKeyError}</p >}
                            {secretKeyError && <p className={`${classes.error} ${classes.secondSecretKeyError}`}> {secretKeyError}</p >}

                            <label>Новый секретный ключ</label>
                            <input onChange={onNewSecretKeyChange} value={safetySettings?.newSecretKey} type={!newSecretKeyVisibility ? 'password' : 'text'}></input>
                            <FontAwesomeIcon onClick={onThirdEyeIconClick} className={classes.thirdEyeIcon} icon={newSecretKeyVisibility ? faEye : faEyeSlash} />

                            <label>Повторите ключ</label>
                            <input onChange={onSecondNewSecretKeyChange} value={safetySettings?.secondNewSecretKey} type={!secondNewSecretKeyVisibility ? 'password' : 'text'}></input>
                            <FontAwesomeIcon onClick={onFourthEyeIconClick} className={classes.fourthEyeIcon} icon={secondNewSecretKeyVisibility ? faEye : faEyeSlash} />
                        </div>}


                    {!deleteAccSettingsVisibility && <p onClick={onDeleteAccSettingsButtonClick} className={classes.showDeleteAccSettings}>Удалить аккаунт</p>}
                    {deleteAccSettingsVisibility &&
                        <div className={classes.deleteAccSettings}>
                            <p><span>Внимание!</span><br></br>После удаления вашей учётной записи восстановить её будет уже <span>невозможно</span></p><br></br>
                            <p>Для удаления страницы выберите нужный пункт ниже, а затем введите пароль для подтверждения действий</p><br></br>
                            <p>Вы уверены, что хотите удалить свою страницу?</p>
                            <div className={classes.radioBox}>
                                <div onClick={onYesRadioClick} className={classes.radio}>
                                    {removalAccStatus === 'remove' && <div className={classes.selected}></div>}
                                </div>
                                <label onClick={onYesRadioClick}>Да</label>
                                <div onClick={onNoRadioClick} className={classes.radio}>
                                    {removalAccStatus === 'no remove' && <div className={classes.selected}></div>}
                                </div>
                                <label onClick={onNoRadioClick}>Нет</label>
                            </div>
                        </div>}


                    <div className={classes.confirmBox}>
                        <p className={classes.header}>подтвердите изменения</p>
                        <label>Текущий пароль<span title='обязательное поле'>*</span></label>
                        <input onChange={onCurrentPasswordChange} value={safetySettings?.currentPassword} type={!currentPasswordVisibility ? 'password' : 'text'} required></input>
                        <FontAwesomeIcon onClick={onFifthEyeIconClick} className={classes.fifthEyeIcon} icon={currentPasswordVisibility ? faEye : faEyeSlash} />
                        {invalidPasswordError && <p className={`${classes.error} ${classes.currentPasswordError}`}> {invalidPasswordError}</p >}
                        <button onClick={onUpdateSafetySettingsButtonClick} type='submit' disabled={safetySettings?.currentPassword === '' && true}>Сохранить</button>

                    </div>
                    {!authUserId && <Navigate to={'/login'} />}
                </form>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        safetySettings: state.settingsPage.safetySettings,
        existingUserError: state.settingsPage.existingUserError,
        invalidPasswordError: state.settingsPage.invalidPasswordError,
        safetySectionPreloader: state.settingsPage.safetySectionPreloader,
        successSafetyUpdate: state.settingsPage.successSafetyUpdate
    }
}

export default connect(mapStateToProps, {
    setEmail,
    setNewPassword,
    setSecondNewPassword,
    setExistingUserError,
    getUserSafetySettings,
    setSecretKey,
    setSecondSecretKey,
    setCurrentPassword,
    updateUserSafetySettings,
    setInvalidPasswordError,
    deleteUser
})(SafetySection)