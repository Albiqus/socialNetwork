import classes from './FriendItem.module.css';

const FriendItem = (props) => {
    return (
        <div className={classes.FriendItemBlock}> 
        <img src={props.src} alt='фото пользователя'></img>             
        <p>{props.name}</p>
        </div>
    )
}

export { FriendItem }