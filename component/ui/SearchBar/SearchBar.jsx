import classes from './SearchBar.module.css';
import Select from '../select/select';
import InputSearch from '../inputSearch/inputSearch';

const searchBar = ({data, serachHandller, query})=>{

        // console.log(data.categories)
        const categoriesarr = [];

        if(data?.categories){
            data.categories.map(el=>{
                categoriesarr.push({name: el.name, value: el.name})
            })
        }
    return(
        <div className={classes.searchbar_target}>
            <div className={classes.searchbar_box}>
                <Select serachHandller={serachHandller}
                classnm={true}  
                value={query.categoryName}
                options={categoriesarr} id={'categoryName'} label=' شاخه ها'>
                </Select>
                
                <Select 
                classnm={true}  
                serachHandller={serachHandller}
                id={'sort'}
                value={query.sort}
                options={[{name:'جدیدترین ها',
                value: '-craeteAt'},
                {name:'محبوب ترین ها',
                value: '-salesNumber -craeteAt'}
            ]}
                label='مرتب سازی بر اساس'>
                </Select>
                
                <InputSearch 
                classnm={true}  
                value={query.title} serachHandller={serachHandller}/>
            </div>
        </div>
    )
}

export default searchBar;