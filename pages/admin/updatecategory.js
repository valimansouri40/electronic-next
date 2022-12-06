import Form from "@component/ui/form/form"
import { useEffect, useState } from "react"
import { createCategory } from "data/FormData";
import InputSearch from "@component/ui/inputSearch/inputSearch";
import fetchData from "@/fetchData/fetchData";
import GoBack from "@component/goBack/goBack";

export default function createcategory(){
    const [data, setdata] = useState(createCategory);
    const [id, setId] = useState();
    const [search, setSearch] = useState('');

    const serachHandller=async(n,e)=>{
        setSearch(e)

        // setres();
        const resDt = await fetchData('/some/category', 'GET', 'name=' + e, null);
        // console.log(resDt)
        if(  resDt?.data?.length > 0 ) {
            data.name.value = resDt.data[0].name;
            setId(resDt.data[0]._id);
        }else{
            data.name.value = '';
            setId();
        };


    }
    
    const deleteHandller = async()=>{
        if(id){
            await fetchData('/some/category/' + id, 'DELETE', '', true);
        }
    }
    

    return(
        <div style={{position: 'relative', width: '100%', 
        height:'100vh', background:'#c0dbf1', 
        display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div style={{position: 'absolute', top:'2rem',left: '50%',
             transform:'translate(-50%,-50%)'}} >
                <InputSearch  value={search} 
                    serachHandller={serachHandller} />
            </div>
            <GoBack/>
           <Form url={'/some/category/' + id } 
           method='PATCH'
           title='به روزرسانی شاخه'
           id={id} deleteHandller={deleteHandller}
           cookie={true} data={data} setdata={setdata}/> 
        </div>
        )
}
