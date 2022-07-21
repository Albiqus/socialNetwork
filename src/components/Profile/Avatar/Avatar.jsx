import classes from'./Avatar.module.css';


const Avatar = () => {
    return (
        <div className={classes.region}>
            <img className={classes.box} src='img/andrew.jpg' alt='фото пользователя'></img>
        </div>
    )
}

export { Avatar }