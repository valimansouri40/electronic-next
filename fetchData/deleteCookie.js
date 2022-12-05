const deletecookie=()=>{
    let date = new Date();
    date.setTime(date.getTime()+(100));
    document.cookie = 'electronic' + " = " + "shahhosseini" + "; expires = " +date.toGMTString();
    localStorage.removeItem('userData');
  
    setTimeout(() => {
    window.location.hash = '/';
        window.location.reload();
    }, 1000);

}

export default deletecookie;