import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Users = () => {
    const loadedUsers = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl font-semibold text-center">Users</h2>
            <div className="overflow-x-auto mt-10">
                <table className="table bg-base-200">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loadedUsers.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>Blue</td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;