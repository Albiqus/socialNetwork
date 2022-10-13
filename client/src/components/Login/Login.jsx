import { connect } from 'react-redux';
import { compose } from 'redux';
import classes from './Login.module.css';

export const Login = (props) => {
    return (
        <div className={classes.login}>
            <h1>Логин</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

export default compose(connect(mapStateToProps, {}))(Login)