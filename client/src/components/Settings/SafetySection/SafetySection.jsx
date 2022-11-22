import { connect } from 'react-redux';
import classes from './SafetySection.module.css';

const SafetySection = ({ }) => {
    return (
        <div className={classes.safetySectionBox}>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {})(SafetySection)