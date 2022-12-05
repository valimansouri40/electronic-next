import Form from "@component/ui/form/form"
import { useEffect, useState } from "react"
import { createVideo } from "data/FormData";
import fetchData from "@/fetchData/fetchData";
import GoBack from "@component/goBack/goBack";

export default function createcategory(){
    const [data, setdata] = useState(createVideo);
    const [response, setres] = useState();
    useEffect(async()=>{
         setres(await fetchData('/some/category', 'GET', '', null));
        // console.log(response)
       
        // return()=>[]
    },[])

    if(response?.data){
        data.categoryId.options.data = response.data.map(mp=>{
            return {name: mp.name, value: mp._id}
        });
    }

    return(
        <div
        style={{width: '100%', height:'100vh', background:'#c0dbf1', 
            display:'flex', alignItems:'center', justifyContent:'center'}}
        >
            <GoBack/>
           <Form url='/video' title='اضافه کردن محصول' cookie={true} data={data} setdata={setdata}/> 
        </div>
        )
}
