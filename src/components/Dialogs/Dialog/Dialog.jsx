import classes from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://pbs.twimg.com/media/DhVPqoRWsAECiYw.jpg:large' alt='фото пользователя'></img>
            <h1>{props.name}</h1>
            <p>{props.message}</p>
        </div>
    )
}

export {Dialog}