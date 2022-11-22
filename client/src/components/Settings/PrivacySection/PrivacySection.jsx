import { connect } from 'react-redux';
import classes from './PrivacySection.module.css';

const PrivacySection = ({ }) => {
    return (
        <div className={classes.privacySectionBox}>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {})(PrivacySection)