
import classes from './Posts.module.css';

export const Posts = (props) => {
    return (
        <div className={classes.postsBox} >
            <div className={classes.border}>
                <p className={classes.postsHeader}>блог</p>
            </div>
            <textarea placeholder='Что у вас нового?' rows='2'></textarea>
            <button>Опубликовать</button>
        </div>
    )
}