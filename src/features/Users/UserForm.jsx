import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axiosInstance";

const userObjectTemplate = {
  id: null,
  name: {
    firstname: "",
    lastname: "",
  },
  email: "",
  address: {
    street: "",
    city: "",
    number: "",
    zipCode: "",
    geolocation: {
      lat: "",
      long: "",
    },
  },
  username: "",
  password: "",
  phone: "",
};

function UserForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState(userObjectTemplate);

  useEffect(() => {
    if (id) {
      api
        .get(`/users/${id}`)
        .then((response) => {
          setFormData(response.data);
          console.log("Fetched user data:", response.data);
          // Populate form fields with response.data
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [id]);

  const onSubmit = () => {
    let copyFormData = { ...formData };
    delete copyFormData.name;
    delete copyFormData.address;
    delete copyFormData.phone;
    if (id) {
      api
        .put(`/users/${id}`, copyFormData)
        .then((response) => {
          console.log("User updated successfully:", response.data);
          // Handle successful update (e.g., show a message, redirect)
        })
        .catch((error) => {
          console.error("Error updating user:", error);
          // Handle error (e.g., show an error message)
        });
    } else {
      // Create new user
      api
        .post("/users", copyFormData)
        .then((response) => {
          console.log("User created successfully:", response.data);
          // Handle successful creation (e.g., show a message, redirect)
        })
        .catch((error) => {
          console.error("Error creating user:", error);
          // Handle error (e.g., show an error message)
        });
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <h2>{id ? "Edit User" : "New User"}</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th hidden={!id}>First Name</th>
            <th hidden={!id}>Last Name</th>
            <th>Email</th>
            <th hidden={!id}>Address</th>
            <th>User Name</th>
            <th>Password</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="number"
                value={id}
                onChange={(e) =>
                  setFormData({ ...formData, id: e.target.value })
                }
              />
            </td>
            <td hidden={!id}>
              <input
                type="text"
                name="firstName"
                value={formData.name.firstname}
                readOnly
              />
            </td>
            <td hidden={!id}>
              <input
                type="text"
                name="lastName"
                value={formData.name.lastname}
                readOnly
              />
            </td>
            <td>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </td>
            <td hidden={!id}>
              <textarea
                name="address"
                value={
                  formData.address.number +
                  "," +
                  formData.address.street +
                  "," +
                  formData.address.city +
                  "," +
                  formData.address.zipcode
                }
                readOnly
              ></textarea>
            </td>
            <td>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="text"
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </td>
            <td>
              <button type="submit">{id ? "Update" : "Create"}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
export default UserForm;
