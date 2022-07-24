import classes from'./Avatar.module.css';


const Avatar = () => {
    return (
        <div className={classes.avatarBlock}>
            <img src='img/andrew.jpg' alt='фото пользователя'></img>
        </div>
    )
}

export { Avatar }