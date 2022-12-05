import Link from 'next/link';
import classes from './draweritem.module.css';

const drawerItem = ({href, title, onclick})=>{

    return(
        <ul className={classes.draweritem_target}>
            <button onClick={onclick} className={classes.draweritem}>
                 <a href={href}>
                 {title}
                 </a>
            </button>
        </ul>
    )
}

export default drawerItem;