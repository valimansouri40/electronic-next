import { apiUrl } from "@/config/config";
import { ShowAlert } from "data/notification";
import setAndGetcookie from "./setAndGetcookie";

export default async function fetchData(url ,method , query, postData, cookie ){
    let myCookie= '';
    if(cookie) {
        if(typeof cookie === 'string'){
            myCookie = cookie    
        }else{
            myCookie = document.cookie?.split('electronic=')[1]?.split('shahhosseini')[0];            ;
        }
    }
    // console.log(myCookie)
    let data = {loading: true};
    const fullUrl = apiUrl + url + '?' + query;
    const config = {
        headers:{
            "Content-type": "application/json",
            "Authorization" : `Bearer ${myCookie}`
        },
        method: method
    };

    if(['POST', 'PATCH'].includes(method)) config.body = JSON.stringify(postData);
    // console.log(url ,method , query, postData, cookie)
    await fetch( fullUrl , config).then(res=> res.json())
        .then(response =>{
            if(response.status){
                // console.log(response)
                data.data = response.data;
                data.length = response.length
                data.loading = false;
                if(response.token)setAndGetcookie('POST', {token: response.token});
                if(response.message)ShowAlert([],response.message, 'success');
                if(response.reload){
                    setTimeout(() => {
                        window.location.reload()    
                    }, 3000);
                    };
            }else{
                if(response.message)ShowAlert([],response.message, 'fail');

            }
        }).catch(er=>{
            // ShowAlert([],"مشکلی در سرور رخ داده است", 'fail');

                data.loading = false;
                data.error = 'error'
        });

    return data;
}

