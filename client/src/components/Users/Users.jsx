import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { getAndSetTenUsers } from '../../thunks/users-thunks/getAndSetTenUsers';
import classes from './Users.module.css';
import { UsersPreloader } from './UsersPreloader/UsersPreloader';
import UsersNavigation from './UsersNavigation/UsersNavigation';
import UsersItems from './UsersItems/UsersItems';
import { UsersError } from './UsersError/UsersError';
import UsersForm from './UsersForm/UsersForm';
import { updateLastActivityTime } from '../../thunks/common-thunks/updateLastActivityTime';
import { getAuthUserData } from '../../thunks/profile-thunks/getAuthUserData';
import { withAuthUserId } from '../../hocs/withAuthUserId';
import AllUsersNavigation from './AllUsersNavigation/AllUsersNavigation';

export const Users = ({
    pagesCount,
    isNoUsers,
    getAndSetTenUsers,
    usersPreloader,
    updateLastActivityTime,
    getAuthUserData,
    authUserId,
    searchingStatus }) => {


    updateLastActivityTime(authUserId)
    getAuthUserData(authUserId)

    let currentPage = Number(localStorage.getItem('currentUsersPage'))
    if (currentPage === 0) currentPage = 1


    if (!pagesCount && !isNoUsers) getAndSetTenUsers(currentPage)


    return (
        <div >
            {usersPreloader && <UsersPreloader />}

            {!usersPreloader &&
                <div className={classes.usersBox}>
                    <UsersForm />
                    {!isNoUsers && < UsersNavigation />}
                    {searchingStatus && <AllUsersNavigation />}
                    {!isNoUsers && <UsersItems />}
                    {isNoUsers && <UsersError />}
                    {!isNoUsers &&
                        <div className={classes.wrapper}>
                            <UsersNavigation />
                        </div>}
                </div >
            }

        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        usersPreloader: state.usersPage.usersPreloader,
        pagesCount: state.usersPage.pagesCount,
        isNoUsers: state.usersPage.isNoUsers,
        searchingStatus: state.usersPage.searchingStatus
    }
}

export default compose(connect(mapStateToProps, { getAndSetTenUsers, updateLastActivityTime, getAuthUserData }), withAuthRedirect, withAuthUserId)(Users)