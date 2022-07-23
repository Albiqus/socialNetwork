import classes from'./Profile.module.css';
import { Avatar } from './Avatar/Avatar';
import { BackgroundImage } from './BackgroundImage/BackgroundImage';
import { MyPosts } from './MyPosts/MyPosts';
import { Description } from './Description/Description';



const Profile = (props) => {
    return (
        <div className={classes.profileBlock}>
        <BackgroundImage/>
        <div className={classes.box}>
        <Avatar/>
        <Description userData={props.profilePage.userData}/>
        </div>
            <MyPosts dataOfPosts={props.profilePage.dataOfPosts}/>
        </div>
    )
}

export { Profile }