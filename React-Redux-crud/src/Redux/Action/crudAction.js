export const addUser =( addData ) =>{
    return{
        type :'Add_User',
        payload : addData
    }
}

export const deleteUser =(deleteData) =>{
    return{
        type:'Delete_User',
        payload: deleteData
    }
}