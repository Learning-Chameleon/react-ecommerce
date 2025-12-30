import { useEffect, useState } from "react";
import { userService } from "../../api/userService";
import { useNavigate } from "react-router-dom";

function UserList() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    userService.getAllUsers
      .then((response) => {
        console.log("Fetched users:", response.data);
        setUserList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const onEdit = (userId) => {
    navigate(`/edit-user/${userId}`);
  };

  const onDelete = (userId) => {
    // Delete user logic here
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>UserName</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name.firstname + " " + user.name.lastname}</td>
                <td>{user.email}</td>
                <td>
                  {user.address.number +
                    "," +
                    user.address.city +
                    "," +
                    user.address.street +
                    "," +
                    user.address.zipcode}
                </td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>
                  <button onClick={() => onEdit(user.id)}>Edit</button>&nbsp;
                  <button onClick={() => onDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
export default UserList;
