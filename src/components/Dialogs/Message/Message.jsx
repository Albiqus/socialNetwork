
import classes from './Message.module.css';
const Message = (props) => {
    return (
    <div className={classes.messageBlock}>
        <p className={classes.messageText}>{props.message}</p>
    </div>
    )
}

export{Message}