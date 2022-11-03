import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { getAndSetTenUsers } from '../../thunks/getAndSetTenUsers';
import classes from './Users.module.css';
import { UsersPreloader } from './UsersPreloader/UsersPreloader';
import { Search } from './Search/Search';
import PagesNavigation  from './PagesNavigation/PagesNavigation';
import UsersItems from './UsersItems/UsersItems';
import { UsersError } from './UsersError/UsersError';

export const Users = (props) => {

    let currentPage = Number(localStorage.getItem('currentUsersPage'))
    if (currentPage === 0) {
        currentPage = 1
    }
    
    if (!props.pagesCount && !props.isNoUsers) {
        props.getAndSetTenUsers(currentPage)
    }
  
    return (
        <div >
            {props.usersPreloader && <UsersPreloader />}
            {!props.usersPreloader && props.isNoUsers && <UsersError />}

            {!props.usersPreloader && !props.isNoUsers &&
                <div className={classes.usersBox}>
                    <Search />
                    <PagesNavigation />
                    <UsersItems />
                    <PagesNavigation  />
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
    }
}

export default compose(connect(mapStateToProps, { getAndSetTenUsers }), withAuthRedirect)(Users)