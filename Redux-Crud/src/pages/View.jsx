import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DeleteUser, Status } from "../Redux/action/crudAction";
import { useState } from "react";

const View = () => {
    const navigate = useNavigate();
    const users = useSelector(state => state.crud.users);
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState("");//serach
    const [filterStatus, setFilterStatus] = useState("all"); // 'all', 'active', or 'inactive'
    const [sortOrder, setSortOrder] = useState("asc"); 


    const deleteUser = (id) => {
        dispatch(DeleteUser(id));
        alert("Record deleted");
    }

    const UserStatus = (id, currentStatus) => {
        dispatch(Status(id));
        alert(currentStatus ? "Deactivated successfully" : "Activated successfully");
    }


  
    const filteredUsers = users
        .filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterStatus === "all" || (filterStatus === "active" ? user.status : !user.status))
        )
        .sort((a, b) => {
            if (sortOrder === "asc") {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });

        console.log(searchTerm);
        

    return (
        <div align="center">
            <h2>View Record</h2>
            <div>
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select onChange={(e) => setFilterStatus(e.target.value)} value={filterStatus}>
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="inactive">DeActive</option>
                </select>
                <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
                    Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
                </button>
            </div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredUsers.map((u, i) => (
                            <tr key={u.id}>
                                <td>{i + 1}</td>
                                <td>{u.name}</td>
                                <td>{u.phone}</td>
                                <td>{u.status ? "Active" : "Deactive"}</td>
                                <td>
                                    <button onClick={() => deleteUser(u.id)}>Delete</button> &nbsp;
                                    <button onClick={() => navigate(`/edit`, { state: u })}>Edit</button> &nbsp;
                                    <button onClick={() => UserStatus(u.id, u.status)}>
                                        {u.status ? "Activate" : "DeActivate"}
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Link to={`/add`}>Add</Link>
        </div>
    )
}

export default View;
