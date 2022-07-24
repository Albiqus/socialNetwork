import { FriendItem } from './FriendItem/FriendItem';
import classes from './MyFriends.module.css';
import { NavLink } from 'react-router-dom';

const MyFriends = (props) => {
        const friendElements = []
        for(let i = 0; i < 6; i++){
            friendElements.push(<FriendItem src={props.dataOfFriends[i].src} name={props.dataOfFriends[i].name.split(' ')[0]}/>)
        }
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