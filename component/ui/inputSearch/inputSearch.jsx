import classes from './inputSearch.module.css';
import Image from 'next/image';

const InputSeach = ({serachHandller, value, classnm})=>(
    <div className={`${classes.searchbar_inputbox} ${classnm?classes.responsive:''}`}>
    <input type='text' className={classes.searchbar_input}
     placeholder='سرچ بر اساس نام' 
     onChange={(e)=>serachHandller('title',e.target.value, true)}
     onKeyPress={(e)=>{
        if(e.key === "Enter"){serachHandller('title',e.target.value)}}}
     />
     <img className={classes.search_ico} 
     src='https://img.icons8.com/android/24/null/search.png'/>
    {/* <Image className={classes.search_ico}
    src='https://img.icons8.com/android/24/null/search.png'
    loader='https://img.icons8.com/android/24/null/search.png'/> */}
 </div>
)

export default InputSeach;