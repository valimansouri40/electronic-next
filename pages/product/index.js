import fetchData from "@/fetchData/fetchData"
// import axios from "axios"
// import { useEffect, useState } from "react"
// import classes from '@/styles/Home.module.css'
import Product from "@component/product/product"
import Layout from "@component/home/layout/Layout"

export default function ProductOne(props) {

    // console.log(props)
    // const [product, setProduct] = useState({})
    // useEffect(async()=>{
    // useEffect(async()=>{
        // const userId = JSON.parse(localStorage.getItem('userData')); 
        // console.log(order, 'vali mansouri')
        //     if( order?.data?.length == 0){
        //         delete props.product.links
        //     }
        //     setProduct(props.product);
        //     console.log(props)
    // },[])
       
    return(
        <div>
             <Layout>
                 <Product product={props?.product}/>
             </Layout>
            {/* <div id="13491050709"><script 
            type="text/JavaScript" 
            src="https://www.aparat.com/embed/Xe5mp?data
            [rnddiv]=13491050709&data[responsive]=yes"></script></div> */}
        </div>
    )
}

export async function getServerSideProps(props){

    let cookies ;
    if(props.req.cookies?.electronic){
      cookies = props.req.cookies.electronic?.replace('shahhosseini','')
    }

    const param = props.query.id;
    let getProducat ;
    // if(params?.slug){
     getProducat = await fetchData(`/video/${param}`  , 'GET',
      '', null);
      let order;
      if(cookies){
          order = await fetchData('/order', 'GET',
            `videoId=${param}&page=${1}&limit=10`,null,cookies );
        }
       if(getProducat?.data?.status === 'money' && order?.data?.length === 0){
            delete getProducat?.data.links
       }
    // }
    console.log(getProducat, order)
    return {props:{ product:  getProducat?.data, id: param}};
}