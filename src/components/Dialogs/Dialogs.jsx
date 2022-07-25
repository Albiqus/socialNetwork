

import classes from './Dialogs.module.css';
import { DialogItem } from './Dialog/DialogItem';
import { Message } from './Message/Message';
import React from 'react';


const Dialogs = (props) => {
    const NewMessageElement = React.createRef();
    const addMessage = () => {
        alert('Сообщение отправлено')
    }
    const dialogElements = props.dialogsPage.dataOfDialogs.map(d => <DialogItem name={d.name} id={d.id} src={d.src} />)
    const messageElements = props.dialogsPage.dataOfMessages.map(m =>  <Message message={m.message} id={m.id}/>)
    return (
        <div className={classes.dialogs}>
            <div>
                {dialogElements}
            </div>
            <div className={classes.messagesBlock}>
                <h1>{props.dialogsPage.dataOfDialogs[0].name}</h1>
                <div className={classes.messages}>
                {messageElements}
                </div>
                <textarea ref={NewMessageElement}></textarea>
                <button onClick={addMessage}>Go</button>
            </div>
        </div>
    )
}

export {Dialogs}