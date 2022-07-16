import classes from'./Profile.module.css';
import { Avatar } from './Avatar/Avatar';
import { BackgroundImage } from './BackgroundImage/BackgroundImage';
import { MyPosts } from './MyPosts/MyPosts';


const Profile = () => {
    return (
        <div className={classes.profile}>
        <BackgroundImage/>
        <Avatar/>
        <MyPosts/>
        </div>
    )
}

export { Profile }