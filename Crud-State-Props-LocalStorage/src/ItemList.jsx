import React, { useState } from 'react';

const ItemList = ({ items, deleteItem, updateItem }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');

  const handleEdit = (item) => {
    setIsEditing(item.id);
    setEditedName(item.name);
    setEditedEmail(item.email);
  };

  const handleUpdate = (id) => {
    updateItem({ id, name: editedName, email: editedEmail });
    setIsEditing(null);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            {isEditing === item.id ? (
              <>
                <td>
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="email"
                    value={editedEmail}
                    onChange={(e) => setEditedEmail(e.target.value)}
                  />
                </td>
                <td>
                  <button onClick={() => handleUpdate(item.id)}>Save</button>
                </td>
              </>
            ) : (
              <>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                  <button onClick={() => deleteItem(item.id)}>Delete</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemList;
