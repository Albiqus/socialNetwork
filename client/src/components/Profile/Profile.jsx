import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { withRouter } from '../../hocs/withRouter';
import { setProfileStatus } from '../../store/profile-reducer';
import { getAndSetProfileData } from '../../thunks/getAndSetProfileData';
import { setAvatar } from '../../thunks/setAvatar';
import { updateStatus } from '../../thunks/updateStatus';
import { Preloader } from '../Common/Preloader/Preloader';
import classes from './Profile.module.css';


export const Profile = (props) => {

    const [statusInputStatus, setStatusInputStatus] = useState(false)
    const [newStatusText, setNewStatusText] = useState(props.profileData.status)

    const currentId = props.router.params.userId
    const authUserId = localStorage.getItem('id')

    useEffect(() => {
        setNewStatusText(props.profileData.status)
    }, [props.profileData.status]);

    useEffect(() => {
        let userId = props.router.params.userId
        if (!userId) {
            userId = localStorage.getItem('id')
        }
        props.getAndSetProfileData(userId)
    }, [props.router.params.userId]);

    const onAddStatusClick = () => {
        setStatusInputStatus(true)
    }

    const onStatusClick = () => {
        setStatusInputStatus(true)
    }

    const onStatusChange = (e) => {
        setNewStatusText(e.target.value)
    }

    const onSetStatusClick = () => {
        props.updateStatus(authUserId, newStatusText)
        setStatusInputStatus(false)
    }

    const onAvatarChange = (e) => {
        const data = new FormData()
        const img = e.target.files[0]
        data.append('avatar', img)

        props.setAvatar(data, authUserId)
    }

    // const onAvatarDefaultClick = (e) => {
    //     console.log(e.target)
    // }

    return (
        <div>
            {props.profilePreloader &&
                <div className={classes.profileBox}>
                    <div className={classes.preloader}>
                        <Preloader />
                    </div>
                </div>}
            {props.profileError &&
                <div className={classes.profileBox}>
                    <div className={classes.profileError}>
                        <p>{props.profileError}</p>
                    </div>
                </div>}
            {!props.profilePreloader && !props.profileError &&
                <div className={classes.profileBox}>
                    <div className={classes.avatarBox}>
                        {props.profileData.avatarAverage === ''
                            ? <div>
                                <label for="avatar">
                                    <div className={classes.avatarDefault}>
                                        <p>добавьте аватар</p>
                                    </div>
                                </label>
                                <input onChange={onAvatarChange} type="file" id="avatar" />
                            </div>
                            : <img className={classes.avatar} src={props.profileData.avatarAverage} alt='аватар' ></img>
                        }
                    </div>
                    <div className={classes.infoBox}>
                        <div className={classes.mainInfo}>
                            <p className={classes.name}>{props.profileData.firstName} {props.profileData.lastName}</p>
                            {currentId === authUserId
                                ? props.profileData.status === ''
                                    ? !statusInputStatus && <p onClick={onAddStatusClick} className={classes.statusPrompt}>добавьте статус</p>
                                    : !statusInputStatus && <p onClick={onStatusClick} className={classes.status}>{props.profileData.status}</p>
                                : <p className={classes.status}>{props.profileData.status}</p>
                            }
                            {statusInputStatus &&
                                <form className={classes.statusForm}>
                                    <input onChange={onStatusChange} placeholder='напишите что-нибудь..' value={newStatusText} autoFocus></input>
                                    <button onClick={onSetStatusClick}></button>
                                </form>
                            }
                        </div>
                        <div className={classes.moreInfo}>
                            {props.profileData.city !== '' && <p><span className={classes.title}>Город: </span><span className={classes.data}>{props.profileData.city}</span></p>}
                            {props.profileData.dateOfBirthday !== '' && <p><span className={classes.title}>Дата рождения: </span><span className={classes.data}>{props.profileData.dateOfBirthday}</span></p>}
                            {props.profileData.maritalStatus !== '' && <p><span className={classes.title}>Семейное положение: </span><span className={classes.data}>{props.profileData.maritalStatus}</span></p>}
                        </div>
                    </div>
                    <div className={classes.panelsBox}>

                    </div>
                    <div className={classes.postsBox}>

                    </div>
                </div>}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileData,
        profilePreloader: state.profilePage.profilePreloader,
        profileError: state.profilePage.profileError,
    }
}

export default compose(connect(mapStateToProps, { getAndSetProfileData, setProfileStatus, updateStatus, setAvatar }), withRouter, withAuthRedirect)(Profile)