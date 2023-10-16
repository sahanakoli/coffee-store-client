import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import Swal from 'sweetalert2'

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = id =>{
      fetch(`http://localhost:5000/user/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
            Swal.fire(
                'Deleted!',
                'Deleted Successfully',
                'success'
              );
              const remainingUsers = users.filter(user => user._id !== id);
              setUsers(remainingUsers);
        }
      })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl font-semibold text-center mt-8">Users</h2>
            <div className="overflow-x-auto mt-10">
                <table className="table bg-base-200">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Logged In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td></td>
                                <td>
                                    <button onClick={ () => handleDelete(user._id)} 
                                    className="btn">X</button>
                                </td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;