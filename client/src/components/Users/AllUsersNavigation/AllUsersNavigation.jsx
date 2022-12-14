import { connect } from 'react-redux';
import { setIsNoUsers, setSearchingStatus } from '../../../store/users-reducer';
import { getAndSetTenUsers } from '../../../thunks/users-thunks/getAndSetTenUsers';
import classes from './AllUsersNavigation.module.css';

const AllUsersNavigation = ({ getAndSetTenUsers, setSearchingStatus, setIsNoUsers }) => {

    const onAllUsersButtonClick = () => {
        getAndSetTenUsers(1)
        setSearchingStatus(false)
        setIsNoUsers(false)
    }

    return (
        <div className={classes.AllUsersNavigationBox}>
            <p onClick={onAllUsersButtonClick} className={classes.allUsersButton}>ко всем пользователям</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { getAndSetTenUsers, setSearchingStatus, setIsNoUsers })(AllUsersNavigation)