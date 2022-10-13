import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import classes from './Users.module.css';

export const Users = (props) => {
    return (
        <div className={classes.users}>
            <h1>Пользователи</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps, {}), withAuthRedirect)(Users)