import classes from'./Avatar.module.css';


const Avatar = () => {
    return (
        <div>
        <img className={classes.box} src='https://yt3.ggpht.com/a/AATXAJwjgvDlC7WK-tiqkQw3F78gsspikGg4jiun1JMI=s900-c-k-c0xffffffff-no-rj-mo' alt='фото пользователя'></img>
        </div>
    )
}

export { Avatar }