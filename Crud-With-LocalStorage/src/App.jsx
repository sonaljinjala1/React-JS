import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [editMode, setEditMode] = useState("");
  const [editId, setEditId] = useState("");

  const getrecord = () => {
    let all = localStorage.getItem("users");
    if (all) {
      return JSON.parse(localStorage.getItem("users"));
    } else {
      return [];
    }
  };

  const [allrecord, setAllrecord] = useState(getrecord());

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("All fields are required");
      return;
    }

    if (editMode) {
      const updatedRecords = allrecord.map((val) =>
        val.id === editId ? { ...val, name, phone } : val
      );
      setAllrecord(updatedRecords);
      localStorage.setItem("users", JSON.stringify(updatedRecords));
      alert("User updated successfully");
      setEditMode("");
      setEditId("");
    } else {
      let obj = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        phone: phone,
      };

      let oldRecord = [...allrecord, obj];
      localStorage.setItem("users", JSON.stringify(oldRecord));
      setAllrecord(oldRecord);
      alert("User added successfully");
    }

    setName("");
    setPhone("");
  };

  const handleEdit = (id) => {
    const userToEdit = allrecord.find((val) => val.id === id);
    setName(userToEdit.name);
    setPhone(userToEdit.phone);
    setEditMode(true);
    setEditId(id);
  };

  const handleDelete = (id) => {
    const updatedRecords = allrecord.filter((val) => val.id !== id);
    setAllrecord(updatedRecords);
    localStorage.setItem("users", JSON.stringify(updatedRecords));
    alert("User deleted successfully");
  };

  return (
    <div className="container">
      <div className="row">
        <h3 align="center" className="mt-3">
          Crud  App
        </h3>
        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="card-header">Add Data</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                      Phone
                    </label>
                    <input
                      type="phone"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <button type="submit" className="mt-4 btn btn-primary">
                      {editMode ? "Update" : "Submit"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="card-header">View Data</div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">SrNo.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allrecord.map((val, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{val.name}</td>
                        <td>{val.phone}</td>
                        <td>
                          <button
                            className="btn btn-primary me-2"
                            onClick={() => handleEdit(val.id)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(val.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
