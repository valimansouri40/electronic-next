import Form from "@component/ui/form/form"
import { useEffect, useState } from "react"
import { sineup } from "data/FormData";

export default function Sineup(){
    const [data, setdata] = useState(sineup);
    useEffect(()=>{
        
        const userData = localStorage.getItem('userData')
        if(userData) window.location.replace('/');
    },[])

    return(
        <div
        style={{width: '100%', height:'100vh', background:'#c0dbf1', 
            display:'flex', alignItems:'center', justifyContent:'center'}}
        >
           <Form url='/auth/sineup' title='ساخت حساب' data={data} setdata={setdata}/> 
        </div>
        )
}