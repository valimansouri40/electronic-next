import Form from "@component/ui/form/form"
import { useState } from "react"
import { createCategory } from "data/FormData";
import GoBack from "@component/goBack/goBack";


export default function createcategory(){
    const [data, setdata] = useState(createCategory);
    return(
        <div style={{width: '100%', height:'100vh', background:'#c0dbf1', 
        display:'flex', alignItems:'center', justifyContent:'center'}}>
            <GoBack/>
            <Form url='/some/category' title='اضافه کردن شاخه' cookie={true} data={data} setdata={setdata}/> 
        </div>
        )
}
