let  initialState = 0;

const Conter = (state = initialState, action)=>{
    switch(action. type){
        case 'inc':
            return state + 1

        case 'dec':
            return state - 1

        default :
            return state
    }
}

export default Conter;