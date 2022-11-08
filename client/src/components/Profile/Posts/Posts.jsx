import { compose } from 'redux';
import classes from './Posts.module.css';
import { withRouter } from '../../../hocs/withRouter';
import { PostsHeader } from './PostsHeader/PostsHeader';
import PostsForm from './PostsForm/PostsForm';
import PostsItems from './PostsItems/PostsItems';

const Posts = (props) => {

    const currentId = props.router.params.userId
    const authUserId = localStorage.getItem('id')

    return (
        <div className={classes.postsBox} >
            <PostsHeader />
            {currentId === authUserId && <PostsForm />}
            <PostsItems/>
        </div>
    )
}

export default compose(withRouter)(Posts)
