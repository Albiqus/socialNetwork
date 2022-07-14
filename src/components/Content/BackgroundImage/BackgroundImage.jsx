import classes from'./BackgroundImage.module.css';


const BackgroundImage = () => {
    return (
        <div className = {classes.box}>
            <img src='https://get.wallhere.com/photo/sunlight-sunset-nature-reflection-sky-sunrise-evening-morning-Sun-horizon-atmosphere-dusk-cloud-tree-dawn-afterglow-meteorological-phenomenon-35694.jpg' alt='back'></img>
        </div>
    )
}

export { BackgroundImage }