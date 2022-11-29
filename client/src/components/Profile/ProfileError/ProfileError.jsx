
import { connect } from 'react-redux';
import { compose } from 'redux';
import classes from './ProfileError.module.css';

import errorIcon from '../../../images/icons/error.png'

const ProfileError = () => {
    return (
        <div className={classes.profileBox}>
            <div className={classes.profileError}>
                <br /><br />
                <p>пользователь не найден</p>
                <p>возможно, страница удалена</p>
                <img src={errorIcon} alt='пользователь не найден'></img>
            </div>  
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profileError: state.profilePage.profileError,
    }
}

export default compose(connect(mapStateToProps, {}))(ProfileError)