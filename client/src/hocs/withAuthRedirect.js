import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if (!localStorage.getItem('id')) {
            return <Navigate to={'/login'}/>
        }
        return <Component {...props}/>
    }
    
    return RedirectComponent
}
