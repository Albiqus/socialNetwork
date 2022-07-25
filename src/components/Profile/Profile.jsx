import classes from'./Profile.module.css';
import { Avatar } from './Avatar/Avatar';
import { BackgroundImage } from './BackgroundImage/BackgroundImage';
import { MyPosts } from './MyPosts/MyPosts';
import { Description } from './Description/Description';
import { MyFriends } from './MyFriends/MyFriends';



const Profile = (props) => {
    return (
        <div className={classes.profileBlock}>
        <BackgroundImage/>
        <Avatar/>
        <Description userData={props.profilePage.userData}/>
        <MyFriends dataOfFriends={props.profilePage.dataOfFriends}/>
        <MyPosts dataOfPosts={props.profilePage.dataOfPosts} addPost={props.addPost}/>
        </div>
    )
}

export { Profile }