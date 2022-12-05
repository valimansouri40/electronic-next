import Form from "@component/ui/form/form"
import { useEffect, useState } from "react"
import { login } from "data/FormData";
import GoBack from "@component/goBack/goBack";

export default function Login(){
    const [data, setdata] = useState(login);
    useEffect(()=>{
        
        const userData = localStorage.getItem('userData')
        if(userData) window.location.replace('/');
    },[])

    return(
        <div style={{width: '100%', height:'100vh', background:'#c0dbf1', 
            display:'flex', alignItems:'center', justifyContent:'center'}} >
            <GoBack/>
           <Form url={'/auth/login'} title='ورود به حساب' data={data} setdata={setdata}/> 
        </div>
        )
}