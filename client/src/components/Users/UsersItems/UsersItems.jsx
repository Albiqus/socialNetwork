import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { getAge } from '../../../utils/common-utils/getAge';
import classes from './UsersItems.module.css';

const UsersItems = ({users}) => {

    const usersItems = users?.map((user) => {
        return (
            <NavLink to={`/profile/${user.id}`} className={classes.userItem} key={user.id} id={user.id}>
                <div className={classes.avatarBox}>
                    {user.avatar_average === '' && <div className={classes.avatarDefault}></div>}
                    {user.avatar_average !== '' && <img className={classes.avatar} src={user.avatar_average} alt='аватар'></img>}
                </div>
                <div className={classes.mainInfo}>
                    <p className={classes.fullname}><span>{user.first_name}</span> <span>{user.last_name}</span></p>
                    <p className={classes.status}>{user.status}</p>
                </div>
                <div className={classes.moreInfo}>
                    <p className={classes.age}>
                        <span>{user.date_of_birth !== '' && getAge(user.date_of_birth)}</span></p>
                    <p className={classes.country}>{user.country}</p>
                </div>
            </NavLink>
        )
    })

    return (
        <div className={classes.userItemsBox}>
            {usersItems}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

export default compose(connect(mapStateToProps, {}))(UsersItems)