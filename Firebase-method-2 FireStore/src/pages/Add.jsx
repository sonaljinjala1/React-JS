import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { app } from "../FireStore";

const add = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const db = getFirestore(app);

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await addDoc(collection(db, "users"), {
                Name: name,
                Phone: phone
            })
            alert("Reacord Add")
            navigate("/")
        } catch (err) {
            console.log(err);
            return false;
        }
    }
    return (
        <div align="center">
            <h2>Add User</h2>
            <form onSubmit={handlesubmit}>
                <table border={1}>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" onChange={(e) => setName(e.target.value)} value={name} /></td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td><input type="number" onChange={(e) => setPhone(e.target.value) }  value={phone}  /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" /></td>
                    </tr>
                </table>
            </form>
            
           <Link to ="/">View</Link>

        </div>  
    )

}

export default add
