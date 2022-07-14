// import classes from'./Content.module.css';
import { Avatar } from './Avatar/Avatar';
import { BackgroundImage } from './BackgroundImage/BackgroundImage';
import { MyPosts } from './MyPosts/MyPosts';


const Content = () => {
    return (
        <div className='content'>
        <BackgroundImage/>
        <Avatar/>
        <MyPosts/>
        </div>
    )
}

export { Content }