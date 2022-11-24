import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from '../../../hocs/withRouter';
import { updateStatus } from '../../../thunks/profile-thunks/updateStatus';
import classes from './Info.module.css';

const Info = ({ profileData, router, updateStatus }) => {

    const currentId = router.params.userId
    const authUserId = localStorage.getItem('id')

    const [statusInputStatus, setStatusInputStatus] = useState(false)
    const [newStatusText, setNewStatusText] = useState(profileData.status)

    useEffect(() => {
        setNewStatusText(profileData.status)
    }, [profileData.status]);


    const onAddStatusClick = () => {
        setStatusInputStatus(true)
    }

    const onStatusClick = () => {
        setStatusInputStatus(true)
    }

    const onStatusChange = (e) => {
        const statusText = e.target.value
        setNewStatusText(statusText)
    }

    const onSetStatusClick = () => {
        updateStatus(authUserId, newStatusText)
        setStatusInputStatus(false)
    }

    return (
        <div className={classes.infoBox}>
            <div className={classes.mainInfo}>
                <p className={classes.name}>{profileData.firstName} {profileData.lastName}</p>
                {currentId === authUserId
                     ? profileData.status === ''
                        ? !statusInputStatus && <p onClick={onAddStatusClick} className={classes.statusPrompt}>добавьте статус</p>
                        : !statusInputStatus && <p onClick={onStatusClick} className={classes.authUserStatus}>{profileData.status}</p>
                    : <p className={classes.status}>{profileData.status}</p>
                }
                {statusInputStatus &&
                    <form className={classes.statusForm}>
                        <input onChange={onStatusChange} placeholder='напишите что-нибудь..' value={newStatusText} autoFocus></input>
                        <button onClick={onSetStatusClick}></button>
                    </form>
                }
            </div>
            <div className={classes.moreInfo}>
                {profileData.city !== '' && <p><span className={classes.title}>Город: </span><span className={classes.data}>{profileData.city}</span></p>}
                {profileData.dateOfBirthday !== '' && <p><span className={classes.title}>Дата рождения: </span><span className={classes.data}>{profileData.dateOfBirthday}</span></p>}
                {profileData.maritalStatus !== '' && <p><span className={classes.title}>Семейное положение: </span><span className={classes.data}>{profileData.maritalStatus}</span></p>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileData,
    }
}

export default compose(connect(mapStateToProps, { updateStatus }), withRouter)(Info)