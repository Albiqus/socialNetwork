import classes from'./BackgroundImage.module.css';


const BackgroundImage = () => {
    return (
        <div className = {classes.BackgroundImageBlock}>
            <img src='img/background.jpg' alt='back'></img>
        </div>
    )
}

export { BackgroundImage }