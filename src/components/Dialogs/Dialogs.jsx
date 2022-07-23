
import classes from './Dialogs.module.css';
import { DialogItem } from './Dialog/DialogItem';
// import { Message } from './Message/Message';



const Dialogs = (props) => {
    const dialogElements = props.dialogsPage.dataOfDialogs.map(d => <DialogItem name={d.name} id={d.id} src={d.src} />)
    return (
        <div className={classes.dialogs}>
            <div>
                {dialogElements}
            </div>
            <div className={classes.messageBlock}>
                {/* <Message message='Привет'/>
                <Message message='Есть косарь в долг?' />
                <Message message='Верну через неделю' /> */}
            </div>
        </div>
    )
}

export {Dialogs}