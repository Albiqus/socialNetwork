import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { setProfileStatus } from '../../store/profile-reducer';
import { getPosts } from '../../thunks/profile-thunks/getPosts';
import { getProfileData } from '../../thunks/profile-thunks/getProfileData';
import { getAuthUserData } from '../../thunks/profile-thunks/getAuthUserData';
import { getAuthUserLikes } from '../../thunks/profile-thunks/getAuthUserLikes';
import Avatar from './Avatar/Avatar';
import Info from './Info/Info';
import Posts from './Posts/Posts';
import classes from './Profile.module.css';
import ProfileError from './ProfileError/ProfileError';
import { ProfilePreloader } from './ProfilePreloader/ProfilePreloader';
import { updateLastActivityTime } from '../../thunks/common-thunks/updateLastActivityTime';
import CommunicationPanel from './CommunicationPanel/CommunicationPanel';
import { getFriendRequestStatus } from '../../thunks/friends-thunks/getFriendRequestStatus';
import { getFriendsRequests } from '../../thunks/friends-thunks/getFriendsRequests';
import { getFriendStatus } from '../../thunks/friends-thunks/getFriendStatus';
import Friends from './Friends/Friends';
import { getSixFriends } from '../../thunks/profile-thunks/getSixFriends';
import { withAuthUserId } from '../../hocs/withAuthUserId';
import { withCurrentUserId } from '../../hocs/withCurrentUserId';

export const Profile = ({
    getProfileData,
    getAuthUserLikes,
    getPosts,
    getAuthUserData,
    profilePreloader,
    profileError,
    updateLastActivityTime,
    getFriendRequestStatus,
    getFriendsRequests,
    getFriendStatus,
    getSixFriends,
    currentId,
    authUserId
}) => {

    useEffect(() => {
        let userId = currentId
        if (!userId) userId = authUserId
        updateLastActivityTime(authUserId)
        getFriendsRequests(authUserId)

        getProfileData(userId)
        getPosts(userId)
        getAuthUserData(authUserId)
        getAuthUserLikes(authUserId, userId)
        getFriendRequestStatus(authUserId, userId)
        getFriendStatus(authUserId, userId)
        getSixFriends(currentId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentId]);
    
    
    return (
        <div>
            {profilePreloader && <ProfilePreloader />}
            {profileError && <ProfileError />}
            {!profilePreloader && !profileError &&
                <div className={classes.profileBox}>
                    <Avatar />
                    <Info />
                    <div className={classes.wrapper}>
                        {authUserId !== currentId && <CommunicationPanel />}
                        <Friends />
                    </div>
                    <Posts />
                </div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profilePreloader: state.profilePage.profilePreloader,
        profileError: state.profilePage.profileError
    }
}

export default compose(connect(mapStateToProps, {
    getProfileData,
    getPosts,
    getAuthUserLikes,
    setProfileStatus,
    getAuthUserData,
    updateLastActivityTime,
    getFriendRequestStatus,
    getFriendsRequests,
    getFriendStatus,
    getSixFriends
}), withAuthRedirect, withAuthUserId, withCurrentUserId)(Profile)