import classes from'./Post.module.css';


const Post = (props) => {
    return (
        <div className={classes.item}>
             <img src='https://yt3.ggpht.com/a/AATXAJwjgvDlC7WK-tiqkQw3F78gsspikGg4jiun1JMI=s900-c-k-c0xffffffff-no-rj-mo' alt='фото пользователя'></img>
            <p>{props.message}</p>
            <div className={classes.likes}>
                <span>Like {props.likeCount}</span>
            </div>
        </div>
    )
}

export { Post }