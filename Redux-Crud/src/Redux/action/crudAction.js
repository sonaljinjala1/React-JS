export const AddUser = (data) => {
    return {
        type: 'add',
        payload: data
    }
}

export const DeleteUser = (id) => {
    return {
        type: 'delete',
        payload: id
    }
}

export const UpdateUser = (data) => {
    return {
        type: 'update',
        payload: data
    }
}

export const Status = (id) => {
    return {
        type: "status",
        payload: id
    };
};
