import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { compose } from 'redux';
import StepOne from './StepOne/StepOne';
import StepThree from './StepThree/StepThree';
import StepTwo from './StepTwo/StepTwo';


export const Register = ({ currentStep , successRegistrationStatus}) => {
    return (
        <>
            {currentStep === 1 && <StepOne />}
            {currentStep === 2 && <StepTwo />}
            {currentStep === 3 && <StepThree />}
            {successRegistrationStatus && <Navigate to={'/login'} />}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        currentStep: state.registerPage.currentStep,
        successRegistrationStatus: state.registerPage.successRegistrationStatus
    }
}

export default compose(connect(mapStateToProps, {}))(Register)