import { connect } from 'react-redux';
import { compose } from 'redux';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';

export const Register = (props) => {
    const currentStep = props.currentStep
    return (
        <>
            {currentStep === 1 && <StepOne />}
            {currentStep === 2 && <StepTwo />}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        currentStep: state.registerPage.currentStep
    }
}

export default compose(connect(mapStateToProps, {}))(Register)