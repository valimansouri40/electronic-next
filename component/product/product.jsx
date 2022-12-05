import fetchData from '@/fetchData/fetchData';
import { useEffect, useRef, useState } from 'react';
import classes from './product.module.css';
import Modal from '@component/ui/modal/modal';

const Product = ({product})=>{
    const [modal, chModalVal] = useState(false);
    const clickHandller = async()=>{
        // console.log(productId);
        let prd = product;
        prd.UserId = JSON.parse(localStorage.getItem('userData'))._id;
        prd.videoId = prd._id;
        
        // console.log(prd, JSON.parse(localStorage.getItem('userData')))
        const orderInit = await fetchData('/order', 'POST', '', prd, true);
        // console.log(orderInit)
        window.location.reload();
    }
    // document.addEventListener('mousedown',(e)=>{
    //     console.log(e)
    // })
    // const ref = useRef();

    // useEffect(()=>{
    //     console.log(ref)
    // },[ref])
    
    // console.log(data, product)
    return(
        <><section className={classes.product_target}>
                {product.links?.length > 0?
                <div className={classes.product_box}>
                    
                        <iframe 
                        // height={height}
                        // ref={ref}
                        // aria-disabled='true'
                        frameborder="0" 
                        allow="accelerometer; autoplay;
                         clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        src={product.links[0]}
                        ></iframe>
                </div>:
                <div className={classes.sell_order_box}>

                        <button onClick={()=>chModalVal(true)} 
                        className={classes.btn_order_submit}>
                        خرید ویدئو
                    </button>
                </div>
                }
                <div className={classes.product_titlebox}>
                        <h1>{product.title}</h1>
                </div>
                <div className={classes.product_titlebox}>
                        <h2> شاخه : {product.title}</h2>
                </div>
                <div className={classes.product_paragrafbox}>
                        <p>{product.description}</p>
                </div>
                {product.price > 0 && product.status === 'money'?
                <div className={classes.product_pricebox}>
                        <p>قیمت : {product.price.toLocaleString()} تومان</p>
                </div>:
                <div className={classes.product_pricebox}>
                <p>رایگان</p>
                </div>}
                {/* <div  className={classes.product_text}>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>    
                </div> */}
        </section>
        {modal&&<Modal chModalVal={chModalVal} clickHandller={clickHandller}/>}
        </>
    )
};

export default Product;

