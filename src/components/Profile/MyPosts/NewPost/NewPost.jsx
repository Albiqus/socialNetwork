import classes from'./NewPost.module.css';


const NewPost = (props) => {
    return (
        <div className={classes.newpostBlock}>
            <form>
                <textarea rows={3} cols={40} placeholder='Что у вас нового?'></textarea>
                <button type='submit'>Опубликовать</button>
            </form>
        </div>
    )
}

export { NewPost }