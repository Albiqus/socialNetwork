import { FriendItem } from './FriendItem/FriendItem';
import classes from './MyFriends.module.css';
import { NavLink } from 'react-router-dom';

const MyFriends = (props) => {
        const friendElements = props.dataOfFriends.map(f => <FriendItem name={f.name} src={f.src} />)
    return (
        <div className={classes.MyFriendsBlock}>
            <div className={classes.header}><NavLink className={classes.navLink} to='/friends'>Мои друзья</NavLink></div>
            <aside>
           {friendElements}
            </aside>
        </div>
    )
}

export { MyFriends }