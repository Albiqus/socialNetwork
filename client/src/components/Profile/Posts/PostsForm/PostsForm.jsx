import { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useRef } from 'react';
import { useEffect } from 'react';

import { createPost } from '../../../../thunks/profile-thunks/createPost';
import classes from './PostsForm.module.css';
import uploadPostImageIMG from '../../../../images/icons/upload-post-image.png'
import ellipsisPreloader from '../../../../images/preloaders/ellipsis-preloader.svg'
import { setIsPostCreation } from '../../../../store/profile-reducer';
import { validateText } from '../../../../utils/common-utils/validateText';
import { getCurrentTime } from '../../../../utils/common-utils/getCurrentTime';
import { updateLastActivityTime } from '../../../../thunks/common-thunks/updateLastActivityTime';
import { withAuthUserId } from '../../../../hocs/withAuthUserId';


const PostsForm = ({
    createPost,
    newPostPreloader,
    setIsPostCreation,
    isPostCreation,
    updateLastActivityTime,
    authUserId}) => {

    const [newPostText, setNewPostText] = useState('')
    const [uploadIMG, setUploadIMG] = useState(null)

    const formRef = useRef()

    useEffect(() => {
        const handleClick = (e) => {
            if (!formRef.current) return
            if (!formRef.current.contains(e.target)) setIsPostCreation(false)
        }
        if (isPostCreation) document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [isPostCreation, setIsPostCreation])


    const onFormFocus = () => {
        setIsPostCreation(true)
    }

    const onTextareaChange = (e) => {
        const newPostText = e.target.value
        setNewPostText(newPostText)
    }

    const onFileInputChange = (e) => {
        const img = e.target.files[0]
        setUploadIMG(URL.createObjectURL(img))
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        updateLastActivityTime(authUserId)
        
        const data = new FormData()
        const img = e.target[1].files[0]
        data.append('postImage', img)

        const date = getCurrentTime()
        const imageStatus = img ? 1 : 0

        const validatedText = validateText(newPostText)

        if (validatedText !== '' || imageStatus === 1) {
            createPost(authUserId, newPostText, data, date, imageStatus)
            setNewPostText('')
            setUploadIMG(null)
            e.target[1].value = null
        }
    }
    
    return (
        <form ref={formRef} onFocus={onFormFocus} onSubmit={onFormSubmit} className={classes.postsForm}>
            <textarea onChange={onTextareaChange} placeholder='Что у вас нового?' rows='2' value={newPostText}></textarea>
            <div className={isPostCreation ? classes.buttonsBox : `${classes.buttonsBox} ${classes.hidden}`}>
                {uploadIMG && <div className={classes.uploadImageBox}><img className={classes.uploadImage} src={uploadIMG} alt='загруженное изображение'></img></div>}
                {uploadIMG && <p className={classes.uploadImageText}>изображение загружено</p>}
                <label htmlFor="image"><img src={uploadPostImageIMG} alt='загрузить изображение'></img></label>
                <input onChange={onFileInputChange} type="file" id="image" />
                {!newPostPreloader && <button>Опубликовать</button>}
                {newPostPreloader && <button disabled><img src={ellipsisPreloader} alt='публикуем..'></img></button>}
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        newPostPreloader: state.profilePage.newPostPreloader,
        isPostCreation: state.profilePage.isPostCreation
    }
}

export default compose(connect(mapStateToProps, { createPost, setIsPostCreation, updateLastActivityTime }), withAuthUserId)(PostsForm)





