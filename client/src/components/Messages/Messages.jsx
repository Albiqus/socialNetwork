import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import classes from './Messages.module.css';

export const Messages = (props) => {
    return (
        <div className={classes.messages}>
            <h1>Сообщения</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps, {}), withAuthRedirect)(Messages)