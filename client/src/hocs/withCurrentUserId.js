import { useParams } from 'react-router-dom'

export const withCurrentUserId = (Component) => {
    function ComponentWithRouterProp(props) {
        let currentId = useParams().userId;
        return (
            <Component
                {...props}
                currentId = {currentId}
            />
        );
    }
    
    return ComponentWithRouterProp;
}

