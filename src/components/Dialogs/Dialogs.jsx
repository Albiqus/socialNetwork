

import classes from './Dialogs.module.css';
import { DialogItem } from './Dialog/DialogItem';
import { Message } from './Message/Message';



const Dialogs = (props) => {
    const dialogElements = props.dialogsPage.dataOfDialogs.map(d => <DialogItem name={d.name} id={d.id} src={d.src} />)
    return (
        <div className={classes.dialogs}>
            <div>
                {dialogElements}
            </div>
            <div className={classes.messagesBlock}>
                <h1>{props.dialogsPage.dataOfDialogs[0].name}</h1>
                <div className={classes.messages}>
                <Message message={props.dialogsPage.dataOfDialogs[0].messages[0]} src={props.dialogsPage.dataOfDialogs[0].src}/>
                <Message message={props.dialogsPage.dataOfDialogs[0].messages[1]} src={props.dialogsPage.dataOfDialogs[0].src}/>
                <Message message={props.dialogsPage.dataOfDialogs[0].messages[2]} src={props.dialogsPage.dataOfDialogs[0].src}/>
                </div>
            </div>
        </div>
    )
}

export {Dialogs}