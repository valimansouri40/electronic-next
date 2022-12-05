import classes from './modal.module.css';


const modal =({chModalVal, clickHandller})=>{
    
     
 
    return(
    <div  className={classes.modal_background}>
        <div className={classes.modal_target}>
            <div className={classes.modal_box}>
                <div onClick={()=>chModalVal(false)} className={classes.close_box}>
                    <span className={classes.span_1}></span>
                    <span className={classes.span_2}></span>
                </div>
                <div className={classes.modal_title_box}>
                    <h3 > 
                        آیا از خرید دوره اطمینان داری؟
                    </h3>
                </div>
                <div className={classes.modal_btn_box}>
                        <button onClick={clickHandller} className={classes.modal_btn_ok}>
                            تایید
                        </button>
                        <button onClick={()=>chModalVal(false)}
                        className={classes.modal_btn_cancel}>
                            لغو
                        </button>
                </div>
            </div>  
        </div>
    </div>
)}

export default modal;