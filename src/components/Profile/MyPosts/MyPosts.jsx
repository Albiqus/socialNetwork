import { Post } from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            Посты
            <div>
                Новый пост
            </div>
            <Post message='наконец починил шкаф!' likeCount = '4'/>
            <Post message='Жду новый сезон глухаря' likeCount='1' />
            <Post message='Михалыч поймал рыбу ВО ДАЁТ' likeCount='7'/>
        </div>
    )
}

export { MyPosts }