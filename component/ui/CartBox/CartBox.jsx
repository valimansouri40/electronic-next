import classes from './CartBox.module.css';
import Cart from '../Cart/Cart';
// import { useState } from 'react';
import Paginate from '../paginate/paginate';

const CartBox = ({data, setProductId, serachHandller, query, chModalVal})=>{
    
    // const [free, setval] = useState('free')
    // const setvalHandller =(val)=>setval(val);
    const statusHandller =(value)=>{
        
        // setvalHandller(value);
        serachHandller('status', value)
    };
    return(
        <div className={classes.cartbox_target}>
            <div className={classes.cartbox_tipic}>
                    <button  onClick={()=>statusHandller('free')}
                     className={`${classes.cartbox_tipic_btn} 
                     ${query.status !== 'free'? classes.cartbox_tipic_active:''}`}>ویدیو های رایگان </button>
                    <button  onClick={()=>statusHandller('money')}
                    className={`${classes.cartbox_tipic_btn} 
                    ${query.status !== 'money' ? classes.cartbox_tipic_active:''}`}>ویدیو های غیر رایگان</button>
            </div>
            <div className={classes.cartbox_box}>
                {data.data.length !== 0?data.data.map(mp=>(
                    <Cart chModalVal={chModalVal} setProductId={setProductId} {...mp}/>
                 )):<span className={classes.zerolength}>موردی یافت نشد</span>} 

            <Paginate length={data?.length}
             setpage={serachHandller} page={query.page} limit={10}  />
            </div>
        </div>
    )
}

export default CartBox;