import { Dialog } from './Dialog/Dialog';
import classes from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
       <Dialog message='Здарова Андрюха где мои бабки' name='Виталий Заботин'/>
       <Dialog message='Андрюха тебя ищет Витёк' name='Дима Лиговский' />
        </div>
    )
}

export {Dialogs}