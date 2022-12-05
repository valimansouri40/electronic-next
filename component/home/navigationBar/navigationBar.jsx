import classes from './navigationBar.module.css';
import Link from 'next/link';

const NavigationBar = ()=>{


    return(
        <div className={classes.navigation_target}>
            <li>
            <a href="/login" className={classes.nav}>ورود به حساب</a>

            </li>
            
            <li>
            <a href="/sineup" className={classes.nav}>ساخت حساب</a>

            </li>
        </div>
    )
}

export default NavigationBar;