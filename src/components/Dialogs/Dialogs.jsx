
import classes from './Dialogs.module.css';
import { Dialog } from './Dialog/Dialog';
// import { Message } from './Message/Message';
import { dataOfDialogs } from '../MockData/MockData.js'


const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div>
                <Dialog name={dataOfDialogs[0].name} id={dataOfDialogs[0].id} src={dataOfDialogs[0].src} />
                <Dialog name={dataOfDialogs[1].name} id={dataOfDialogs[1].id} src={dataOfDialogs[1].src} />
                <Dialog name={dataOfDialogs[2].name} id={dataOfDialogs[2].id} src={dataOfDialogs[2].src} />
                <Dialog name={dataOfDialogs[3].name} id={dataOfDialogs[3].id} src={dataOfDialogs[3].src} />
                <Dialog name={dataOfDialogs[4].name} id={dataOfDialogs[4].id} src={dataOfDialogs[4].src} />
                <Dialog name={dataOfDialogs[5].name} id={dataOfDialogs[5].id} src={dataOfDialogs[5].src} />
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