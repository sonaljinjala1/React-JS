let initialState ={
    users:[
        {id:1 , name:'john' , phone : 345678},
        {id:2 , name:'jane' , phone : 345678},
        {id:3 , name:'jane' , phone : 345678},
        {id:4 , name:'jane' , phone : 345678},
        {id:5 , name:'jane' , phone : 345678},
    ]
}

const crudreducer = (state = initialState , action ) =>{
    
    switch (action.type){
        default:
            return state;
    }
}

export default crudreducer