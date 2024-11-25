import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddUser, UpdateUser } from "../Redux/action/crudAction";
import { useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [editid, setEditId] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        setName(location?.state?.name)
        setPhone(location?.state?.phone)
        setEditId(location?.state?.id)
    }, [location?.state])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !phone) {
            alert("all filed is required");
            return false;
        }

        let obj = {
            id: editid,
            name: name,
            phone: phone
        }

        dispatch(UpdateUser(obj))
        alert("record update")
        navigate('/')
    }

    return (
        <div align="center">
            <h2>Edit Record</h2>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tr>
                        <td>Name :- </td>
                        <td><input type="text" onChange={(e) => setName(e.target.value)} value={name} /></td>
                    </tr>
                    <tr>
                        <td>Phone :- </td>
                        <td><input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" /></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default Edit;