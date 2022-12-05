import classes from './select.module.css';

const selectTag = ({options, label,value, serachHandller, id, classnm})=>(
    <div className={`${classes.select_box} ${classnm?classes.responsive:''}`}>
        {/* <label htmlFor={label}>{label}</label> */}
        <select id={label} value={value} onChange={(e)=>serachHandller(id, e.target.value)} className={classes.selecttag}>
                <option value={''}>{value === ''?label:'همه'}</option>
                {options.map(el=>(
                    <option value={el.value}>
                        {el.name}
                    </option>
                ))}
        </select>
    </div>
)

export default selectTag;