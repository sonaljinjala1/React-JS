let initialState = {
    users: JSON.parse(localStorage.getItem('users')) || []
};

const crudReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            let newdata = [...state.users, action.payload];
            localStorage.setItem('users', JSON.stringify(newdata));
            return {
                ...state,
                users: newdata
            }

        case 'delete':
            let ddata = state.users.filter(val => val.id != action.payload);
            localStorage.setItem("users", JSON.stringify(ddata));
            return {
                ...state,
                users: ddata
            };

        case 'update':
            let up = state.users.map((val) => {
                if (val.id == action.payload.id) {
                    val.name = action.payload.name;
                    val.phone = action.payload.phone
                }
                return val;
            })
            localStorage.setItem("users", JSON.stringify(up));
            return {
                ...state,
                users: up
            }

            case "status":
                const updatedUsers = state.users.map(user =>
                    user.id === action.payload ? { ...user, status: !user.status } : user
                );
                localStorage.setItem("users", JSON.stringify(updatedUsers));
                return {
                    ...state,
                    users: updatedUsers
                };

                
        default:
            return state;
    }
}

export default crudReducer