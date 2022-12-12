import { useEffect } from "react";
import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../hocs/withAuthRedirect"
import { withRouter } from "../../hocs/withRouter"
import { updateLastActivityTime } from "../../thunks/common-thunks/updateLastActivityTime";
import { getFriends } from "../../thunks/friends-thunks/getFriends";
import { getFriendsRequests } from "../../thunks/friends-thunks/getFriendsRequests";
import { getAuthUserData } from "../../thunks/profile-thunks/getAuthUserData";
import CurrentFriends from "./CurrentFriends/CurrentFriends";
import classes from './Friends.module.css';
import { FriendsPreloader } from "./FriendsPreloader/FriendsPreloader";
import FriendsRequests from "./FriendsRequests/FriendsRequests";

const Friends = ({
    updateLastActivityTime,
    friendsRequests,
    router,
    getFriendsRequests,
    getFriends,
    getAuthUserData,
    friendsPreloader }) => {

    const authUserId = localStorage.getItem('id')
    const userId = router.params.userId

    updateLastActivityTime(authUserId)

    useEffect(() => {
        getFriendsRequests(userId)
        getFriends(userId)
        getAuthUserData(authUserId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.params.userId]);


    return (
        <div className={classes.friendsBox}>
            {friendsPreloader && <FriendsPreloader />}
            {friendsRequests && !friendsPreloader && authUserId === userId && <FriendsRequests />}
            {!friendsPreloader && <CurrentFriends />}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        friendsRequests: state.friendsPage.friendsRequests,
        friendsPreloader: state.friendsPage.friendsPreloader
    }
}

export default compose(connect(mapStateToProps, {
    updateLastActivityTime,
    getFriendsRequests,
    getFriends,
    getAuthUserData
}), withRouter, withAuthRedirect)(Friends)