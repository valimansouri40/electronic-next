import '../styles/globals.css'
import {Provider} from 'react-redux'
import {store} from '../redux@toolkit/store';
import { useEffect } from 'react';
import fetchData from '@/fetchData/fetchData';

function MyApp({ Component, pageProps }) {
  useEffect(async()=>{
    
    const userData = await fetchData('/auth', 'GET', '', null, true ) ;
    // console.log(userData)
    if(userData?.data){
        localStorage.setItem('userData', JSON.stringify(userData.data));
    }
},[])
  return (
  <Provider store={store}>
    <section id='notif-body'>
    
      <Component  {...pageProps} />
    </section>
  </Provider>
  )
}

export default MyApp
