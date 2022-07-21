import classes from'./Post.module.css';


const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='img/andrew.jpg' alt='фото пользователя'></img>
            <p>{props.message}</p>
            <img src='img/like.png' alt='лайк'></img>
            <span>{props.likeCount}</span>
        </div>
    )
}

export { Post }