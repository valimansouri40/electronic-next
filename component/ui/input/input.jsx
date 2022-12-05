import { apiImageUrl } from '@/config/config';
import classes from './input.module.css';
// import convertToBase64 from 'data/convertToBase64';

const Input = (props)=>{
    const {eltype, value, valid, touch, onchange, imgHandller, options} = props;

    let input;
    let classname ;
    if(!valid || !touch ){
        if(value === ''){
            classname = '';
        }else{
        classname = classes.invalid_input;
        }
    }

    // conver image file to base64
    const getBase64 = (file) => new Promise(function (resolve, reject) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject('Error: ', error);
    });

    // set image value
    const fileHandller =async(e)=>{

        if(e['0']){
        const image = await getBase64(e['0']).then(result=>result);
        imgHandller(image);
        }
    }
    
    // select tag
    switch(eltype.type){
        case 'input': 
             input = <input {...eltype} onChange={onchange} value={value} 
            className={`${classes.input_form} ${classname}`}/>;
            break
        case 'select':
             input = <select className={classes.select_form} onChange={onchange} value={value}>
                    <option value="">{eltype.placeholder}</option>
                    {options?.data?.map(el=>(
                        <option value={el.value}>{el.name}</option>))}
            </select>;
        break
        case 'file': 
        return <><label htmlFor={eltype.placeholder} 
                className={classes.label_form} >
                        <span>
                            {eltype.placeholder}
                        </span>
                        
                        {value && <img src={value.length && value?.startsWith('data:image')?value:
                        apiImageUrl + '/' + value
                    } />}
                        </label>
                <input {...eltype} style={{display:'none'}}  id={eltype.placeholder} 
                onChange={(e)=>fileHandller(e.target.files)} />
            </>
            break
        case 'textarea':
            input = <textarea placeholder={eltype.placeholder}  onChange={onchange} value={value} 
            className={`${classes.textarea_form} ${classname}`}></textarea>
            break;
        default : 
             input = <input {...eltype} value={value} onChange={onchange}
            className={`${classes.input_form} ${classname}`}/>
        }

    return(
        <div className={classes.input_form_box}>
            {input}
        </div>
    )
}

export default Input;