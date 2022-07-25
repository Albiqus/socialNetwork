import classes from'./NewPost.module.css';
import React from 'react';


const NewPost = (props) => {
    
const newPostElement = React.createRef();

const addPost = (e) => {
    e.preventDefault();
    props.addPost(newPostElement.current.value)
    newPostElement.current.value = '';
}

    return (
        <div className={classes.newpostBlock}>
            <form>
                <textarea ref={newPostElement} rows={3} cols={40} placeholder='Что у вас нового?'></textarea>
                <button onClick={addPost}>Опубликовать</button>
            </form>
        </div>
    )
}

export { NewPost }