import classes from'./Profile.module.css';
import { Avatar } from './Avatar/Avatar';
import { BackgroundImage } from './BackgroundImage/BackgroundImage';
import { MyPosts } from './MyPosts/MyPosts';
import { Description } from './Description/Description';



const Profile = () => {
    return (
        <div className={classes.profileBlock}>
        <BackgroundImage/>
        <div className={classes.box}>
        <Avatar/>
        <Description/>
        </div>
        <MyPosts/>
        </div>
    )
}

export { Profile }