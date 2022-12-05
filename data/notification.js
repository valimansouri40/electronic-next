export const remowchild=()=>{
    const el= document.querySelector('#alert');
    if(el) el.parentElement.removeChild(el)

}

export const ShowAlert=(ms,text,cls,time=5000)=>{
const elLengths = document.getElementsByClassName('alert--fail').length + document.getElementsByClassName('alert--success').length ;
const responsiveAlert =  elLengths === 0?2.5:4.5 
const top = (elLengths + 1) * responsiveAlert

let art =`<div class="alert--${cls} lengths" style="top: ${top}rem;"  id="alert">
${' ' + ms.map((mp,index)=>mp.placeholder?' ' + mp.placeholder + ' ':
' ' + mp + ' ') + text}</div>`;

if(!navigator.onLine){
    art= `<div class="alert--fail lengths" id="alert">شما افلاین هستید </div>`;
}
document.querySelector('#notif-body').insertAdjacentHTML('afterbegin',art);
setTimeout(() => {
    remowchild();
}, time);
}