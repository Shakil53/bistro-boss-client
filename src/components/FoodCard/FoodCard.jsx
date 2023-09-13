import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { user } = useContext(AuthContex)
    const navigate = useNavigate();
    const location = useLocation();
    const [, refatch] = useCart();
    const { name, image, price, recipe, _id } = item;



    const handleAddToCart = (item) => {
        console.log(item)
        if (user && user.email) {
            const menuItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(menuItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refatch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food Added on the Cart',
                            showConfirmButton: false,
                            timer: 800
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',

                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }


    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 font-bold bg-slate-900 text-white">$ {price}</p>
            <div className="card-body">
                <h2 className="card-title font-mono font-bold">{name}</h2>
                <p>{recipe}</p>

                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 border-y-rose-400 text-black">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;