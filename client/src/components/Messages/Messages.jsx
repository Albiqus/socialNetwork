import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { updateLastActivityTime } from '../../thunks/common-thunks/updateLastActivityTime';
import { getAuthUserData } from '../../thunks/profile-thunks/getAuthUserData';
import classes from './Messages.module.css';

export const Messages = ({ updateLastActivityTime, getAuthUserData }) => {

    const authUserId = localStorage.getItem('id')
    updateLastActivityTime(authUserId)
    getAuthUserData(authUserId)

    return (
        <div className={classes.messages}>
            <h1>Сообщения</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

export default compose(connect(mapStateToProps, { updateLastActivityTime, getAuthUserData }), withAuthRedirect)(Messages)