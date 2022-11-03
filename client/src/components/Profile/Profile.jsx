import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { withRouter } from '../../hocs/withRouter';
import { setProfileStatus } from '../../store/profile-reducer';
import { getAndSetProfileData } from '../../thunks/getAndSetProfileData';
import { setAvatar } from '../../thunks/setAvatar';
import Avatar from './Avatar/Avatar';
import Info from './Info/Info';
import { Panels } from './Panels/Panels';
import { Posts } from './Posts/Posts';
import classes from './Profile.module.css';
import ProfileError from './ProfileError/ProfileError';
import { ProfilePreloader } from './ProfilePreloader/ProfilePreloader';

export const Profile = ({ router, getAndSetProfileData, profilePreloader, profileError }) => {

    useEffect(() => {
        let userId = router.params.userId
        if (!userId) {
            userId = localStorage.getItem('id')
        }
        getAndSetProfileData(userId)

    }, [router.params.userId]);

    return (
        <div>
            {profilePreloader && <ProfilePreloader />}
            {profileError && <ProfileError />}

            {!profilePreloader && !profileError &&
                <div className={classes.profileBox}>
                    <Avatar />
                    <Info />
                    <Panels />
                    <Posts />
                </div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profilePreloader: state.profilePage.profilePreloader,
        profileError: state.profilePage.profileError,
    }
}

export default compose(connect(mapStateToProps, { getAndSetProfileData, setProfileStatus, setAvatar }), withRouter, withAuthRedirect)(Profile)