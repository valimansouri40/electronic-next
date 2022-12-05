export const login = {
    email:{
        eltype:{
            type:"email",
            placeholder:'ایمیل خودرا وارد کنید'
        },
        validation:{
            required:true,
            max: 20,
            min:6
        },
        value:'',
        touch:false,
        valid:false
    },
    password:{
        eltype:{
            type:"password",
            placeholder:'پسوورد'
        },
        validation:{
            required:true,
            max: 20,
            min:6
        },
        value:'',
        touch:false,
        valid:false
    }
}

export const sineup = {
    name:{
        eltype:{
            type:"name",
            placeholder:'نام خودرا وارد کنید'
        },
        validation:{
            required:true,
            max: 20,
            min:6
        },
        value:'',
        touch:false,
        valid:false
    },
    email:{
        eltype:{
            type:"email",
            placeholder:'ایمیل خودرا وارد کنید'
        },
        validation:{
            required:true,
            max: 20,
            min:6
        },
        value:'',
        touch:false,
        valid:false
    },
    password:{
        eltype:{
            type:"password",
            placeholder:'پسوورد'
        },
        validation:{
            required:true,
            max: 20,
            min:6
        },
        value:'',
        touch:false,
        valid:false
    },
    passwordConfirm:{
        eltype:{
            type:"passwordConfirm",
            placeholder:' پسوورد را دوباره وارد کنید'
        },
        validation:{
            required:true,
            max: 20,
            min:6
        },
        value:'',
        touch:false,
        valid:false
    }
}

export const createCategory = {
    name:{
        eltype:{
            type:"text",
            placeholder:'نام شاخه را وارد کنید'
        },
        validation:{
            required:true,
            max: 20,
            min:6
        },
        value:'',
        touch:false,
        valid:false
    }
}


export const createVideo = {
    title:{
        eltype:{
            type:"text",
            placeholder:'تایتل  را وارد کنید'
        },
        validation:{
            required:true,
            max: 20,
            min:6
        },
        value:'',
        touch:false,
        valid:false
    },
    description:{
        eltype:{
            type:"textarea",
            placeholder:'توضیحات '
        },
        validation:{
            required:true,
            max: 20,
            min:6
        },
        value:'',
        touch:false,
        valid:false
    },
    price:{
        eltype:{
            type:"number",
            placeholder:'قیمت'
        },
        validation:{
            required:true,
            max: 20,
            min:6,
            isNumeric: true
        },
        value:'',
        touch:false,
        valid:false
    },
    categoryId:{
        eltype:{
            type:"select",
            placeholder:'انتخاب شاخه'
        },
        validation:{
            required:true,
            max: 20,
            min:6
        },
        options:{
            data: []
        },
        value:'',
        touch:false,
        valid:false
    },
    status:{
        eltype:{
            type:"select",
            placeholder:'وضعیت فروش'
        },
        validation:{
            required:true,
            max: 20,
            min:6
        },
        options:{
            data: [{name: 'رایگان', value: 'free'},{name: 'غیر رایگان', value: 'money'},]
        },
        value:'',
        touch:false,
        valid:false
    },
    links:{
        eltype:{
            type:"text",
            placeholder:'لینک ویدیو'
        },
        validation:{
            required:true,
        },
        value:'',
        touch:false,
        valid:false
    },
    imageCover:{
        eltype:{
            type:"file",
            placeholder:'کاور | عکس',
            accept:"image/png, image/jpeg" ,
            multiple:false
        },
        validation:{
            required:true
        },
        value:'',
        touch:false,
        valid:false
    }

}