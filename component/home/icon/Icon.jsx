import Image from 'next/image'
import classes from './icon.module.css';

const Icon = ()=>{


    return(
        <div className={classes.icon_target}>
            <div  className={classes.icon_box}>
                <a href='/'>
            <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-electronic-home-appliance-flaticons-lineal-color-flat-icons-3.png"/>
            {/* <Image src='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-electronic-home-appliance-flaticons-lineal-color-flat-icons-3.png'
                     alt='vali man'/> */}
                     </a>
            </div>
        </div>
    )
}

export default Icon;