import { compose } from 'redux';
import classes from './Posts.module.css';
import { PostsHeader } from './PostsHeader/PostsHeader';
import PostsForm from './PostsForm/PostsForm';
import PostsItems from './PostsItems/PostsItems';
import PostLikesInfoModal from './PostsItems/PostCommunicationPanel/PostLikesInfoModal/PostLikesInfoModal';
import { connect } from 'react-redux';
import CommentLikesInfoModal from './PostsItems/PostComments/CommentsItems/CommentCommunicationPanel/CommentLikesInfoModal/CommentLikesInfoModal';
import { withCurrentUserId } from '../../../hocs/withCurrentUserId';
import { withAuthUserId } from '../../../hocs/withAuthUserId';

const Posts = ({
    postLikesModalStatus,
    commentLikesModalStatus,
    currentId,
    authUserId }) => {
    

    return (
        <div className={classes.postsBox} >
            <PostsHeader />
            {currentId === authUserId && <PostsForm />}
            <PostsItems />
            {postLikesModalStatus && <PostLikesInfoModal />}
            {commentLikesModalStatus && <CommentLikesInfoModal /> }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        postLikesModalStatus: state.profilePage.postLikesModalStatus,
        commentLikesModalStatus: state.profilePage.commentLikesModalStatus
    }
}

export default compose(connect(mapStateToProps, {}), withCurrentUserId, withAuthUserId)(Posts)