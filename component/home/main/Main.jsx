import classes from './main.module.css';
import Cover from "@component/ui/cover/Cover";
import CartBox from '@component/ui/CartBox/CartBox';
import SearchBar from '@component/ui/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import Modal from '@component/ui/modal/modal';
import fetchData from '@/fetchData/fetchData';

const Main = ({data})=>{
    const [query, setQuery] = useState({
        title:'',
        categoryName: '',
        status: 'free',
        sort: ''
    });
    const [modal, chModalVal] = useState(false);
    const [productId, setProductId] = useState(); 

    useEffect(()=>{
        const queryStrUrl = window.location.search.replace('?','').split('&')
        // console.log(queryStrUrl);
        const urlQueryObj = {
            title:'',
            categoryName: '',
            status: 'free',
            sort: '',
            page:1
        }
        queryStrUrl.map(el=>{
            if(el.trim() !== ''){
            const getquery = el.split('=');
            urlQueryObj[getquery[0]] = getquery[1];}
        })
        // console.log(queryStrUrl,'uiasgasyuadsy')
        if(queryStrUrl.includes('status')){
            
        }
        setQuery(urlQueryObj);
        // console.log(queryStrUrl,'querystr')
        if(queryStrUrl.length > 2){
            window.scrollTo({
                top: 600,
                left:0,
                behavior: 'smooth'
            })
        }
    },[])
    const serachHandller = (key, value, active)=>{
        // console.log(key, value)
        query[key] = value;
        // console.log(query)
        setQuery(query);
        
        let queryStr='';
        Object.entries(query).map(qu=>{
            if(qu[1] !== ''){
                queryStr = queryStr + qu[0] + '=' + qu[1] + '&';
            }
        })

        // let newurl = window.location.protocol + "//" + window.location.host + 
        //         '' +  window.location.pathname + '?' + queryStr;
            
        //     window.history.pushState({}, '', newurl)
        if(!active){
            
            const urlQuery = window.location.search;
            if(queryStr !== urlQuery.replace('?',''))

                window.location.assign('?'+ queryStr);
        }else if(key !== 'title'){
            let newurl = window.location.protocol + "//" + window.location.host + 
                '' +  window.location.pathname + '?' + queryStr;
            
            window.history.pushState({}, '', newurl)
        }
    }
    // console.log(data)
    const clickHandller = async()=>{
        // console.log(productId);
        let product = data.data.find(el=>el._id === productId)
        product.UserId = JSON.parse(localStorage.getItem('userData'))._id;
        product.videoId = productId;
        
        // console.log(product, JSON.parse(localStorage.getItem('userData')))
        const orderInit = await fetchData('/order', 'POST', '', product, true);
        // console.log(orderInit)
    }
    return(
        <section className={classes.main}>
            {modal?<Modal modal={modal}
             clickHandller={clickHandller} chModalVal={chModalVal}/>:null}
            <Cover/>
            <SearchBar data={data} query={query} serachHandller={serachHandller}/>
            <CartBox setProductId={setProductId} chModalVal={chModalVal}
             query={query} serachHandller={serachHandller} data={data} />
        </section>
    )
}

export default Main;