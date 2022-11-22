import { connect } from 'react-redux';
import { setCurrentSection } from '../../../store/settings-reducer';
import classes from './SectionsPanel.module.css';

const SectionsPanel = ({ currentSection, setCurrentSection }) => {

    let dataSectionClassName = classes.data
    if (currentSection === 'data') dataSectionClassName +=` ${classes.currentSection}` 

    let privacySectionClassName = classes.privacy
    if (currentSection === 'privacy') privacySectionClassName += ` ${classes.currentSection}` 

    let safetySectionClassName = classes.safety
    if (currentSection === 'safety') safetySectionClassName += ` ${classes.currentSection}` 


    const onDataSectionButtonClick = () => setCurrentSection('data')

    const onPrivacySectionButtonClick = () => setCurrentSection('privacy')

    const onSafetySectionButtonClick = () => setCurrentSection('safety')


    return (
        <div className={classes.sectionsPanelsBox}>
            <div onClick={onDataSectionButtonClick} className={dataSectionClassName}>
                <p>данные</p>
            </div >
            <div onClick={onPrivacySectionButtonClick} className={privacySectionClassName}>
                <p>приватность</p>
            </div>
            <div onClick={onSafetySectionButtonClick} className={safetySectionClassName}>
                <p>безопасность</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentSection: state.settingsPage.currentSection
    }
}

export default connect(mapStateToProps, { setCurrentSection })(SectionsPanel)