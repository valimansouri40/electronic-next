import Icon from "../icon/Icon";
import NavigationBar from "../navigationBar/navigationBar";
import classes from './Header.module.css';
import InputSearch from "@component/ui/inputSearch/inputSearch";
import { useState } from "react";

const Header = ({drawerStyleHandller, userData})=>{
    const [search, setsearch]=useState('')

    const searchHandller = (key, val, active)=>{

        setsearch(val)
        if(!active){
        window.location.replace('/?title=' + val);
    }
    }
    

    return(
        <header className={classes.header_target}>
            {!userData?<>
                <NavigationBar></NavigationBar>
                <InputSearch value={search} serachHandller={searchHandller}/>
                <Icon></Icon>
            </>:
            <>
                <Icon></Icon>
            <InputSearch value={search} serachHandller={searchHandller}/>
            </>}
            {/* <div className={classes.header_searchbar_box}>

            </div> */}
            
            <div className={classes.header_menu} onClick={drawerStyleHandller}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAjklEQVRoge3WvQkCQRCG4XeugWvhAgsxtg5BsB9BsBDjK0TOFq4Bx0hYA/EHYffgfbKd2eCb7ANJkn4X5WO8zJtMDiRDrUAfCa7Afr3qz49RV+7zxrH5IwCSgcxTOepe/V2a50OCHTDVifKVKSO2tUNIkiS9YY2vyhrfHmu8JElaAmt8Vdb49ljjJUl/dQeWhTv7OpXchAAAAABJRU5ErkJggg=="/>            
            </div>
        </header>
    )
}

export default Header;