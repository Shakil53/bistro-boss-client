import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    // delete user from alluser dashboad-----
    const handleDelete = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/admin/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })







    }

    // make an user admin-----------------

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 800
                    })
                }
            })

    }
    return (
        <div className="w-full ml-14">
            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>
            <SectionTitle
                heading='All users'
                subHeading='Admin only'

            >

            </SectionTitle>
            <h3 className="text-3xl font-semibold my-4">Total User: {users.length}</h3>


            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user.role === "admin" ? 'admin' :
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost  bg-gray-600 text-white"><FaUserShield></FaUserShield></button>

                                }</td>
                                <td> <button onClick={() => handleDelete(user)} className="btn btn-ghost  bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)

                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;