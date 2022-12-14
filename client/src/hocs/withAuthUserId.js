

export const withAuthUserId = (Component) => {
    let ComponentWithAuthUserIdProp = (props) => {
        return <Component
            {...props}
            authUserId={localStorage.getItem('id')} />
    }
    return ComponentWithAuthUserIdProp
}
