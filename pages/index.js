// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { selectnumber, setCredentials } from '../redux@toolkit/slices/Game';
import Layout from '@component/home/layout/Layout';
import Main from '@component/home/main/Main';
import fetchData from '@/fetchData/fetchData';
export default function Home(data) {

    // const number = useSelector(selectnumber);
    // const dispatch = useDispatch();
      
    // console.log(data)
  return (
    <Layout>
      <Main data={data}></Main>
    </Layout>
  )
}

export async function getServerSideProps(headerData){

    let queryStr = '';

    if(!headerData.query.status){
        // queryStr = 'status=free'
        headerData.query["status"] = 'free'
    }

    Object.entries(headerData.query).map(qu=>{
      if(qu[1].trim() !== ''){
        queryStr = queryStr + qu[0] + '=' + qu[1] + '&';
    } 
    })

    let cookies ;
    if(headerData.req.cookies?.electronic){
      cookies = headerData.req.cookies.electronic?.replace('shahhosseini','')
    }
    // console.log(headerData.req.cookies)
    const getvideo = await fetchData('/video', 'GET',
     queryStr.indexOf('page') === -1?queryStr +'page=1&limit=10':queryStr + '&limit=10'
    ,null, cookies);  

    const getCategory = await fetchData('/some/category', 'GET', '', null);

    // console.log( getvideo)
    // console.log(headerData.query)
    return {props:{data: getvideo?.data, categories:getCategory?.data ,
        // query: ,
      length: getvideo?.length}}
}
