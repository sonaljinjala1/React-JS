import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { app } from '../FireStore'


const view = () => {
    const db = getFirestore(app)
    const [record, setRecord] = useState([]);
    const getUser = async () => {
        try {
            const data = collection(db, "users")
            const users = await getDocs(data);
            const record = users.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))
            setRecord(record)
        } catch (err) {
            console.log(err);
            return false
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    const deleteUser = async (id) => {
        try {
            let deletedata = doc(db, `users/${id}`);
            await deleteDoc(deletedata);
            alert("record delete");
            getUser();
        } catch (err) {
            console.log(err);
            return false;
        }

    }


    return (
        <div align="center">
            <h2>View User</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>phone</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((u) => {
                            return (
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.Name}</td>
                                    <td>{u.Phone}</td>
                                    <td>
                                        <button onClick={() => deleteUser(u.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to={"/Add"}>Add</Link>
        </div>
    )
}

export default view