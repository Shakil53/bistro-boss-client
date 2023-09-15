import { Helmet } from 'react-helmet';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useCart from '../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart, refetch] = useCart()
    // console.log(cart)
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    // delete item TODO DELETE
    const handleDelete = item => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to Delete this item?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
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

    return (
        <div className='w-full ml-20 mt-8'>
            <Helmet>
                <title>
                    Bistro Boss | My Cart
                </title>
            </Helmet>

            <SectionTitle subHeading={"My Cart"}
                heading={"Add More"}>

            </SectionTitle>
            <div className='uppercase font-semibold h-[60px] flex justify-evenly items-center'>
                <h3 className='text-2xl mr-3'>Total Items: {cart.length}</h3>
                <h3 className='text-2xl mr-3'>Total Price: {total}</h3>
                <button className="btn btn-sm btn-outline btn-warning">Pay</button>

            </div>
            {/* table------------------- */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} />
                                        </div>
                                    </div>


                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className='text-end'>${item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost  bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                    {/* foot */}


                </table>
            </div>


        </div>
    );
};

export default MyCart;