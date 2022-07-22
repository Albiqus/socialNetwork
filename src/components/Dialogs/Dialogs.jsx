
import classes from './Dialogs.module.css';
import { Dialog } from './Dialog/Dialog';
import { Message } from './Message/Message';


const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div>
                <Dialog name='Григорий' id='grigory' src='img/grigory.jpg'/>
                <Dialog name='Дмитрий' id='dmitry' src='img/dmitry.jpg'/>
                <Dialog name='Даша' id='dasha' src='img/dasha.jpg'/>
                <Dialog name='Никита' id='nikita' src='img/nikita.jpg' />
                <Dialog name='Юля' id='jula' src='img/jula.jpg' />
                <Dialog name='Наташа' id='natasha' src='img/natasha.jpg' />
            </div>
            <div className={classes.messageBlock}>
                <Message message='Привет'/>
                <Message message='Есть косарь в долг?' />
                <Message message='Верну через неделю' />
            </div>
        </div>
    )
}

export {Dialogs}