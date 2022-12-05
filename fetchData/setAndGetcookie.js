export default async function setAndGetcookie(method, data){
    // exports.sendcookie=(name,token)=>{
        if(method === 'POST'){
        let date = new Date();
        date.setTime(date.getTime()+(50*24*60*60*1000));
        document.cookie = 'electronic' + " = " + data.token + "shahhosseini" + "; expires = " +date.toGMTString();
        }   
    // }
}