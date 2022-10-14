import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import classes from './Profile.module.css';

export const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <div className={classes.avatar}></div>
            <div className={classes.infoBox}>
                <p className={classes.name}>{props.profile.firstName} {props.profile.lastName}</p>
                <p className={classes.status}>{props.profile.status}</p>
                <div className={classes.mainInfo}>
                    <p>Город: {props.profile.city}</p>
                    <p>Дата рождения: {props.profile.dateOfBirthday}</p>
                    <p>Семейное положение: {props.profile.maritalStatus}</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps, { }), withAuthRedirect)(Profile)