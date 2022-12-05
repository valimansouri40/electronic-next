import classes from './drawer.module.css';
import DrawerItem from '../drawerItem/drawerItem';
import deletecookie from '@/fetchData/deleteCookie';

const drawer = ({value, drawerStyleHandller , userData})=>{

    let classNm ;
    
    
    switch(value){
        case 1: classNm = classes.drawer_opens;
            break;
        case 2: classNm = classes.drawer_close;
            break
        case 0 : classNm = classes.drawer_hidden
            break
        default: classNm = classNm.drawer_hidden
    }

    // const userData = JSON.parse(localStorage.getItem('userData'));
    
    return(
        <div className={`${classes.drawer_target} ${classNm}`}>
            <img src='https://img.icons8.com/windows/32/null/macos-close.png' 
            onClick={drawerStyleHandller} 
            className={classes.drawer_close_ico}/>
            <div className={classes.drawer_box}>
                <DrawerItem href='/' title='صفحه اصلی'/>
                {!userData?<><DrawerItem href='/login' title='ورود به حساب'/>
                <DrawerItem href='/sineup' title='ساخت حساب'/></>:<>
                {userData.role === 'admin'?<>
                    <DrawerItem href='/admin/craetevideo' title='ساخت محصول'/>
                    <DrawerItem href='/admin/updatevideo' title='به روزرسانی محصول'/>
                    <DrawerItem href='/admin/createcategory' title='اضافه کردن شاخه'/>
                    <DrawerItem href='/admin/updatecategory' title='به روزرسانی شاخه'/></>
                :null}
                <DrawerItem href='/order/myorders' title='ویدیو های من'/>
                <DrawerItem href='/' onclick={()=>deletecookie()} title='خروج از حساب'/>
                </>}
            </div>
        </div>
    )
}

export default drawer;