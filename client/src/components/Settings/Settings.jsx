import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { updateLastActivityTime } from '../../thunks/common-thunks/updateLastActivityTime';
import { getAuthUserData } from '../../thunks/profile-thunks/getAuthUserData';
import DataSection from './DataSection/DataSection';
import PrivacySection from './PrivacySection/PrivacySection';
import SafetySection from './SafetySection/SafetySection';
import SectionsPanel from './SectionsPanel/SectionsPanel';
import classes from './Settings.module.css';

export const Settings = ({ currentSection, updateLastActivityTime, getAuthUserData }) => {

    const authUserId = localStorage.getItem('id')
    updateLastActivityTime(authUserId)
    getAuthUserData(authUserId)

    return (
        <div className={classes.settings}>
            <SectionsPanel />
            {currentSection === 'data' && <DataSection/>}
            {currentSection === 'privacy' && <PrivacySection />}
            {currentSection === 'safety' && <SafetySection />}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentSection: state.settingsPage.currentSection
    }
}

export default compose(connect(mapStateToProps, { updateLastActivityTime, getAuthUserData }), withAuthRedirect)(Settings)