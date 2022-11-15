import { connect } from 'react-redux';
import { useState } from 'react';
import classes from './PostsItems.module.css';
import PostInfo from './PostInfo/PostInfo';
import { PostContent } from './PostContent/PostContent';
import PostCommunicationPanel from './PostCommunicationPanel/PostCommunicationPanel';
import {PostComments} from './PostComments/PostComments';


const PostsItems = ({ posts, openСommentsPostsIds }) => {

    const [deletePostButtonPostId, setdeletePostButtonPostId] = useState(null)

    const onPostItemMouseEnter = (e) => {
        const postId = e.currentTarget.id
        setdeletePostButtonPostId(postId)
    }
    const onPostItemMouseLeave = (e) => {
        setdeletePostButtonPostId(null)
    }

    const postsItems = posts?.map((post) => {
        return (
            <div onMouseEnter={onPostItemMouseEnter} onMouseLeave={onPostItemMouseLeave} className={classes.postItem} key={post.id} id={post.id}>
                <PostInfo post={post} deletePostButtonPostId={deletePostButtonPostId} />
                <PostContent post={post} />
                <PostCommunicationPanel post={post} />
                {openСommentsPostsIds.includes(post.id) && <PostComments post={post} />}
            </div>
        )
    })
 
    return (
        <div className={classes.postsItemsBox}>
            {postsItems}
            {postsItems?.length === 0 && <p className={classes.noPostsText}>На стене пока нет ни одной записи</p>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        openСommentsPostsIds: state.profilePage.openСommentsPostsIds
    }
}

export default connect(mapStateToProps, { })(PostsItems)