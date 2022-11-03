import classes from './UsersError.module.css';

export const UsersError = () => {
    return (
        <div className={classes.usersBox}>
            <p className={classes.noUsersText}>нет ни одного зарегистрированного пользователя</p>
        </div>
    )
}