import fetchData from "@/fetchData/fetchData"
import axios from "axios"
import { useEffect, useState } from "react"
// import classes from '@/styles/Home.module.css'
import Product from "@component/product/product"
import Layout from "@component/home/layout/Layout"
import Cart from "@component/ui/Cart/Cart";
import Paginate from "@component/ui/paginate/paginate";
import classes from '@component/ui/CartBox/CartBox.module.css';

export default function ProductOne() {

    const [data, setData] = useState();
    const [page, setPage] = useState(1);
    // const [length, setLength] = useState(0);
    // console.log(props)
    useEffect(()=>{
        
        const userData = localStorage.getItem('userData')
        if(!userData) window.location.replace('/');
    },[])
       
    useEffect(async()=>{
        const userData = JSON.parse(localStorage.getItem('userData'))?._id;
        const myOrders = await fetchData('/order', 'GET', 
        `page=${page}&limit=10`
        , null, true);
        setData(myOrders);
        
    },[page])

    return(
        <div>
             <Layout>
                 {/* <Product product={props.product}/> */}
                 <div className={classes.cartbox_target}>
                   
                    <div className={classes.cartbox_box}>
                    {data?.length?data?.data?.map(mp=>(
                        <Cart unShow={true}
                         {...mp.videoId}/>
                    )):<p className={classes.cartbox_pragragh}>موردی یافت نشد</p>} 

                    <Paginate length={data?.length}
                    setpage={setPage} page={page} limit={10}  />
                    </div>
                </div>
             </Layout>
            {/* <div id="13491050709"><script 
            type="text/JavaScript" 
            src="https://www.aparat.com/embed/Xe5mp?data
            [rnddiv]=13491050709&data[responsive]=yes"></script></div> */}
        </div>
    )
}

