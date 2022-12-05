import Form from "@component/ui/form/form"
import { useEffect, useState } from "react"
import { createVideo } from "data/FormData";
import InputSearch from "@component/ui/inputSearch/inputSearch";
import fetchData from "@/fetchData/fetchData";
import GoBack from "@component/goBack/goBack";


export default function updateVideo(){
    const [data, setdata] = useState(createVideo);
    const [id, setId] = useState();
    const [search, setSearch] = useState('');
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
    const serachHandller=async(n,e)=>{
        setSearch(e)

        // setres();
        const resDt = await fetchData('/video', 'GET', 'title=' + e, null);
        // console.log(resDt)
        if(  resDt?.data?.length > 0 ) {
            Object.entries(resDt.data[0]).map((el)=>{
                // console.log(el,'iduufysy')
                if(!['__v','_id','links','createAt','rate','ratingsQuantity'].includes(el[0])){

                    data[el[0]].value = el[1];
                }else if(el[0] === 'links' && el[1].length > 0){
                    data[el[0]].value = el[1][0];

                }else if( el[0] === '_id' ){
                    // data[el[0]].value = el[1];
                    setId(el[1])            
                }
            })
            setId(resDt.data[0]._id)
        }else{
            setdata(createVideo)
            setId();
        };


    }
    
    const deleteHandller =async()=>{
        
        if(id){
            await fetchData('/some/category/' + id, 'DELETE', '', null);
        }
    }
    // style={{}}

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
           <Form url={'/video/' + id } 
           id={id}

           title='به روزرسانی  محصول'
           method='PATCH'
           cookie={true} data={data} setdata={setdata}/> 
        </div>
        )
}
