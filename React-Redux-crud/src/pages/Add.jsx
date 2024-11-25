
import { useDispatch } from "react-redux";
import { useState } from "react";
const Add = () => {

    const dispatch = useDispatch();

    const [input,setInput] = useState({
        name : '',
        email : '',
        password : ''
    })

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput({
            ...input,[name] : value
        })
    }

    const save = () => {
        const {name,email,password} = input;
        const obj = {
            id : Math.floor(Math.random() * 10000),
            name : name,
            email : email,
            password : password
        }
        dispatch(Adddata(obj));
        alert("record successfully Add");
        setInput({
            name : '',
            email : '',
            password : ''
        })
    }

    return (
       <>
            <Navbar/>
            <center>
                <h1>Add User</h1>

                <table border={1}>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" name="name" onChange={ (e) => handleChange(e) } value={input.name} /></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type="text" name="email" onChange={ (e) => handleChange(e) } value={input.email} /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="text" name="password" onChange={ (e) => handleChange(e) } value={input.password} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="button" onClick={ () => save() } value="submit"/></td>
                    </tr>
                </table>

            </center>
       </>
    )
}

export default Add;
