import { connect } from 'react-redux';
import { compose } from 'redux';
import StepOne from './StepOne/StepOne';
import StepThree from './StepThree/StepThree';
import StepTwo from './StepTwo/StepTwo';

export const Register = (props) => {
    const currentStep = props.currentStep
    return (
        <>
            {currentStep === 1 && <StepOne />}
            {currentStep === 2 && <StepTwo />}
            {currentStep === 3 && <StepThree />}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        currentStep: state.registerPage.currentStep
    }
}

export default compose(connect(mapStateToProps, {}))(Register)