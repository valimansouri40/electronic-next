import Header from "../header/Header";
import classes from './Layout.module.css';
import Drawer from "@component/ui/drawer/drawer";
import { useEffect, useState } from "react";
import fetchData from "@/fetchData/fetchData";
import Footer from "@component/ui/footer/footer";

const Layout = (props)=>{
    const {children} = props;
    const [value, chval] = useState(0);
    const [userData, setUserData] = useState();
    useEffect(()=>{
        setUserData(JSON.parse(localStorage.getItem('userData')))
    },[])    

    const drawerStyleHandller =()=>{
        if(value === 2 || value === 0){
            chval(1);
            
        }else{
            chval(2);
            
        }   
    }

    return(
        <section  className={classes.layout_target}>
            <Header drawerStyleHandller={drawerStyleHandller} userData={userData} ></Header>
            <Drawer userData={userData} value={value} drawerStyleHandller={drawerStyleHandller}/>
            
            <main onClick={()=>chval(0)}>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </section>
    )
}

export default Layout;