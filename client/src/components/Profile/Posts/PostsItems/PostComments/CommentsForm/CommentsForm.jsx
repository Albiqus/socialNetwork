import { useState } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../../../../../thunks/createComment';
import { getDate } from '../../../../../../utils/common-utils/getTime';
import classes from './CommentsForm.module.css';
import uploadCommentImageIMG from '../../../../../../images/icons/upload-comment-image.png'

const CommentsForm = ({ authUserData, post, createComment }) => {

    const authUserId = localStorage.getItem('id')
    const [commentText, setCommentText] = useState('')
    const [isShiftPressed, setIsShiftPressed] = useState(false)
    const [uploadIMG, setUploadIMG] = useState(null)
    const [fileIMG, setFileIMG] = useState(null)

    const onTextareaChange = (e) => {
        const commentText = e.target.value
        setCommentText(commentText)
    }

    const onSendCommentButtonClick = () => {
        if (commentText !== '' || fileIMG !== null) {
            const data = new FormData()
            data.append('commentImage', fileIMG)

            const date = getDate()
            const newCommentsCount = Number(post.commentsCount) + 1

            const imageStatus = fileIMG ? 1 : 0

            createComment(post.id, authUserId, authUserData.avatar, authUserData.firstName, authUserData.lastName, commentText, date, newCommentsCount, data, imageStatus)
        }
        setCommentText('')
        setUploadIMG(null)
        setFileIMG(null)
    }

    const onFormKeyDown = (e) => {
        if (e.code === 'ShiftLeft') {
            setIsShiftPressed(true)
        }
        if (e.code === 'Enter' && !isShiftPressed) {
            onSendCommentButtonClick()
        }
    }

    const onFormKeyUp = (e) => {
        if (e.code === 'ShiftLeft') {
            setIsShiftPressed(false)
        }
    }

    const onFileInputChange = (e) => {
        const img = e.target.files[0]
        setUploadIMG(URL.createObjectURL(img))
        setFileIMG(img)
    }

    return (
        <form className={classes.commentForm} onKeyDown={onFormKeyDown} onKeyUp={onFormKeyUp}>
            <div className={classes.avatarBox}>
                {authUserData.avatar === '' && <img className={classes.avatar} src={require('../../../../../../images/incognito/incognito-small.png')} alt='аватар'></img>}
                {authUserData.avatar !== '' && <img className={classes.avatar} src={authUserData.avatar} alt='аватар'></img>}
            </div>
            <textarea onChange={onTextareaChange} placeholder='Написать комментарий...' rows='2' value={commentText}></textarea>
            <label htmlFor={`commentImage${post.id}`}><img src={uploadCommentImageIMG} alt='загрузить изображение'></img></label>
            <input onChange={onFileInputChange} type="file" id={`commentImage${post.id}`} />
            <img onClick={onSendCommentButtonClick} className={classes.sendCommentButton} src={require('../../../../../../images/icons/send-comment.png')} alt="опубликовать комментарий" />
            {uploadIMG && <div className={classes.uploadImageBox}><img className={classes.uploadImage} src={uploadIMG} alt='загруженное изображение'></img></div>}
            {uploadIMG && <p className={classes.uploadImageText}>изображение загружено</p>}
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        authUserData: state.authUserReducer.authUserData
    }
}

export default connect(mapStateToProps, { createComment })(CommentsForm)