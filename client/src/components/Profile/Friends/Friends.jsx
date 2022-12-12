import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { withRouter } from '../../../hocs/withRouter';
import { isOnline } from '../../../utils/common-utils/isOnline';
import classes from './Friends.module.css';

const Friends = ({ router, friends, friendsCount }) => {

    const currentId = router.params.userId

    const friendsItems = friends?.map((friend) => {
        const onlineStatus = isOnline(friend.lastActivityTime)
        return (
            <NavLink to={`/profile/${friend.friendId}`} className={classes.friendItem} key={friend.friendId}>
                <div className={classes.avatarBox}>
                    {onlineStatus && <div className={classes.activityStatus}></div>}
                    {friend.avatar === '' && <div className={classes.avatarDefault}></div>}
                    {friend.avatar !== '' && <img className={classes.avatar} src={`http://localhost:4000/images/${friend.avatar}`} alt='аватар'></img>}
                </div>
                <p>{friend.firstName}</p>
            </NavLink>
        )
    })

    return (
        <div className={classes.friendsBox}>
            <div className={classes.header}>
                <NavLink to={`/friends/${currentId}`}>друзья {`(${friendsCount})`}</NavLink>
            </div>
            <div className={classes.friendsItemsBox}>
                {friendsItems}
                {friendsItems?.length === 0 && <p className={classes.noFriendsText}>нет друзей</p>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        friends: state.profilePage.friends,
        friendsCount: state.profilePage.friendsCount
    }
}

export default compose(connect(mapStateToProps, {}), withRouter)(Friends)