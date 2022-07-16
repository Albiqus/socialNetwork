import classes from'./BackgroundImage.module.css';


const BackgroundImage = () => {
    return (
        <div className = {classes.box}>
            <img src='https://pixy.org/src/474/4745325.jpg' alt='back'></img>
        </div>
    )
}

export { BackgroundImage }