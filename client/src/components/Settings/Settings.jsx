import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import classes from './Settings.module.css';

export const Settings = (props) => {
    return (
        <div className={classes.settings}>
            <h1>Настройки</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps, {}), withAuthRedirect)(Settings)