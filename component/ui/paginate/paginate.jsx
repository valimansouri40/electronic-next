import React from "react";
import classes from  './paginate.module.css';

const Paginate=(props)=>{
        const {length, setpage, page, limit, scroll}=props;

        let Limit = limit || 20;

        const pages= Math.ceil(length /Limit);
        const scrolltopzero=()=>{
            window.scrollTo({
                top: scroll || 0,
                left: 0,
                behavior: 'smooth'
              });
        }
        
    return (length > Limit ?<div className={classes.paginatebox}>
            {page > 1?<button  onClick={(e)=>{setpage('page',page - 1);scrolltopzero()}} className={classes.btnpage1}></button>:null}
            {page - 1 > 1?<button onClick={(e)=>{setpage('page',e.target.innerHTML * 1);scrolltopzero()}} className={classes.btnpage}>1</button>:null}
            {page > 3?<p  className={classes.sp}>...</p>:null}
            {page > 1?<button onClick={(e)=>{setpage('page',e.target.innerHTML * 1);scrolltopzero()}} className={classes.btnpage}>{page * 1 - 1}</button>:null}
            <button  className={classes.btnpageactive}>{page}</button>
            {pages  > page?<button onClick={(e)=>{setpage('page',e.target.innerHTML * 1);scrolltopzero()}} className={classes.btnpage}>{page * 1 + 1}</button>:null}
            {pages -2 > page?<p   className={classes.sp}>...</p>:null}
            {pages-1  > page?<button onClick={(e)=>{setpage('page',e.target.innerHTML * 1);scrolltopzero()}} className={classes.btnpage}>{pages}</button>:null}
            {pages > page?<button onClick={(e)=>{setpage('page',page + 1);scrolltopzero()}} className={classes.btnpage2}></button>:null}
            
        </div>:null);
    
}

export default Paginate;