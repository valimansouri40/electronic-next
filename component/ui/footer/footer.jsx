// import React from "react";
import classes from './footer.module.css';
// import icon1 from '../../assets/icons/icons8-instagram-50.png';
// import icon2 from '../../assets/icons/icons8-telegram-app-48.png';
// import icon3 from '../../assets/icons/icons8-whatsapp-48.png';


const Footer=(props)=>{

    return(
        <div className={classes.footer}>
                <div className={classes.foot}>
                    <p className={classes.footertext}>مارا در فضای مجازی دنبال کنید</p>
                    <div className={classes.boximg}>
                    <a href="#"><img src="https://img.icons8.com/color/48/null/instagram-new--v1.png"/></a>
                   <a href="#"> <img src="https://img.icons8.com/color/48/null/telegram-app--v1.png"/></a>
                       {/* <a href="#"> <img src={'icon3'} className={classes.iconf} /></a> */}
                    </div>
                </div>
                
                <a className={classes.a} href="mailto:mansourivali40@gmail.com">mansourivali40@gmail.com</a>
        </div>
    )
}

export default Footer;