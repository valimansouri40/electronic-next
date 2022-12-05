import classes from './Cart.module.css';
import Image from 'next/image';
import ass from '@/assets/wish_list.jpg'
import { apiImageUrl } from '@/config/config';
import Router from 'next/router';

const cart = (data)=>{
    const {title, description, price, links, setProductId, 
        chModalVal, imageCover, status, _id, unShow} = data;

    const goToHandller =()=>{
        // window.location.pathname = '/product?id='+ _id;
            Router.push('/product?id='+ _id)
        }

    const orderHandller = ()=>{
        if(localStorage.getItem('userData')){
            chModalVal(true);
            setProductId(_id);
        }else{
            window.location.pathname = '/login';
            // window.location.search = undefined
        }
    }

    return(
        <div className={classes.cart_frame}>
            <article className={classes.cart_target}>
                <div onClick={goToHandller} className={classes.cart_imgbox}>
                    <img src={imageCover?apiImageUrl + imageCover:ass}
                        loader={imageCover?apiImageUrl + imageCover:ass}
                    />
                </div>
                <div onClick={goToHandller} className={classes.cart_textbox}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                </div>
                <hr className={classes.ui_hr} />
                <div className={classes.cart_pricebox}>
                    {!unShow&&<>
                    {status === 'money'?<button
                    onClick={orderHandller}
                    className={classes.sell_video_btn}>خرید دوره</button>:null}
                    <span>{price === 0 || status === 'free'?'رایگان':`$${price.toLocaleString()}`}</span></>}
                </div>
            </article>
        </div>
    )
}

export default cart;