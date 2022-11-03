
import { connect } from 'react-redux';
import { compose } from 'redux';
import classes from './ProfileError.module.css';

const ProfileError = ({ profileError }) => {
    console.log(profileError)
    return (
        <div className={classes.profileBox}>
            <div className={classes.profileError}>
                <p>{profileError}</p>
            </div>
        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        profileError: state.profilePage.profileError,
    }
}

export default compose(connect(mapStateToProps, { }))(ProfileError)