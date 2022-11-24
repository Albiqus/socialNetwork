import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { withRouter } from '../../hocs/withRouter';
import { setProfileStatus } from '../../store/profile-reducer';
import { getPosts } from '../../thunks/profile-thunks/getPosts';
import { getProfileData } from '../../thunks/profile-thunks/getProfileData';
import { getAuthUserData } from '../../thunks/profile-thunks/getAuthUserData';
import { getAuthUserLikes } from '../../thunks/profile-thunks/getAuthUserLikes';
import Avatar from './Avatar/Avatar';
import Info from './Info/Info'; 
import { Panels } from './Panels/Panels';
import Posts  from './Posts/Posts';
import classes from './Profile.module.css';
import ProfileError from './ProfileError/ProfileError';
import { ProfilePreloader } from './ProfilePreloader/ProfilePreloader';

export const Profile = ({ router, getProfileData, getAuthUserLikes, getPosts, getAuthUserData, profilePreloader, profileError }) => {

    const authUserId = localStorage.getItem('id')

    useEffect(() => {
        let userId = router.params.userId
        if (!userId) userId = authUserId
        
        getProfileData(userId)
        getPosts(userId)
        getAuthUserData(authUserId)
        getAuthUserLikes(authUserId, userId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default compose(connect(mapStateToProps, { getProfileData, getPosts, getAuthUserLikes, setProfileStatus, getAuthUserData }), withRouter, withAuthRedirect)(Profile)