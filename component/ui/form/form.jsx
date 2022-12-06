import classes from './form.module.css';
import Input from '../input/input';
import fetchData from '@/fetchData/fetchData';

const Form =(props)=>{
    const {data, setdata, url, cookie, method, title,id,deleteHandller} = props;
    

    const ChangeValueHandller=(e,id)=>{
        const chg= {...data,
        [id]:{
            ...data[id],
            value:e,
            touch:true,
            valid: validateor(e,data[id].validation)
        }
        }
        setdata(chg);

    }


    const imgHandller=(e,id)=>{
        // console.log(e, id)
        const chg= {...data,
        [id]:{
            ...data[id],
            value:e,
            touch:true,
            valid: true
        }
        }
        setdata(chg);

    }

    const validateor=(value,rules)=>{
   
        let valid  = true;
        if(!rules){
            return true;
        }
        if(rules.required){
            valid = value.trim() !== '' && valid;
        }
        if(rules.max){
            valid = value.length <= rules.max && valid;
        }
        if(rules.min){
            valid = value.length >= rules.min && valid;
        }
        
    if (rules.isPhoneNumber) {
        const pattern = new RegExp('^(\\0|0)?9\\d{9}$');
        
        valid = pattern.test(value) && valid;
    }
    
    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        valid = pattern.test(value) && valid
    }
       return valid;
     }

    let arrData = [];
    
    for(let key in data){
        arrData.push({
            id: key,
            ...data[key] 
        })
    }

    const formItems = arrData.map(el=>(
        <Input onchange={(e)=>ChangeValueHandller(e.target.value, el.id)}
         value={el.value} eltype={el.eltype} options={el.options}
            touch={el.touch} valid={el.valid} 
            imgHandller={(e)=>imgHandller(e, el.id)}/>
    ))

    

    const submitHandller = async(e)=>{
        e.preventDefault()
        let form = {};
        arrData.map(mp=>{
            form[mp.id] = mp.value;
            // console.log(mp.id, mp.value)
        })
        const response = await fetchData(url, method?method:'POST', '', form, cookie);
        // console.log(response);
        setTimeout(() => {
            
            window.location.reload();
        }, 2000);


    }
    // console.log(url)
    return(
        <form onSubmit={submitHandller} className={classes.form}>
            {id?<img className={classes.icon_delete}
            onClick={deleteHandller}
            src="https://img.icons8.com/color/48/null/delete-forever.png"/>:null}
            <h1>{title}</h1>
            {formItems}
            <div className={classes.form_link_box}>
                {url === '/auth/sineup' ? <a className={classes.form_link} href='/login'>ورود به حساب</a>:null}
                {url === '/auth/login' ? <a className={classes.form_link} href='/sineup'>ساخت حساب</a>:null}
                {url === '/auth/login'?
                    <a className={classes.form_link} href='/resetpassword'>
                    پسوورد خود را فراموش کردم!</a>:null}
            </div>
            <input className={classes.submit} type='submit' value='ثبت'/>
        </form>
    )
};

export default Form;