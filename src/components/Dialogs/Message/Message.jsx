
import classes from './Message.module.css';

const Message = (props) => {
    return (
    <div className={classes.messageBlock}>
        <img src={props.src} alt='фото пользователя'></img>
        <p className={classes.messageText}> {props.message} </p>
    </div>
    )
}

export{Message}