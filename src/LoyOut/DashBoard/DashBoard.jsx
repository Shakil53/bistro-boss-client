import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome, FaCalendar, FaReceipt, FaWallet, FaBars, FaShopify, FaMailBulk, FaComments, FaUtensils, FaBookDead, FaUser, FaList, } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const DashBoard = () => {
    const [cart] = useCart()
    //TODO: data form the server to have dynamic isAdmin based on Data
    const isAdmin = true;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Dashboard</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full">

                    {
                        isAdmin ? <>
                            <li><Link className="fond-bold text-white" t0='/dashboard/home'><FaHome></FaHome>Admin Home</Link></li>
                            <li><Link className="fond-bold text-white" t0='/dashboard/addItem'><FaUtensils></FaUtensils>Add Item</Link></li>
                            <li><Link className="fond-bold text-white" to='/dashboard/mycart'><FaList></FaList>Manage Item</Link></li>
                            <li><Link className="fond-bold text-white" to='/'><FaBookDead></FaBookDead>Manage Booking</Link></li>
                            <li><Link className="fond-bold text-white" to='/dashboard/allusers'><FaUser></FaUser>All Users</Link></li>
                        </>



                            : <>
                                <li><Link className="fond-semibold text-white" t0='/dashboard/home'><FaHome></FaHome>User Home</Link></li>
                                <li><Link className="fond-semibold text-white" t0='/dashboard/reservations'><FaCalendar></FaCalendar>Reservation</Link></li>
                                <li><Link className="fond-semibold text-white" t0='/dashboard/history'><FaWallet></FaWallet>Payment History</Link></li>
                                <li><Link className="fond-semibold text-white" to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart <div className="badge badge-secondary">+{cart?.length || 0}</div></Link></li>
                                <li><Link className="fond-semibold text-white" to='/'><FaReceipt></FaReceipt>My Booking</Link></li>
                                <li><Link className="fond-semibold text-white" to='/'><FaComments></FaComments>My Review</Link></li></>
                    }


                    <div className="divider"></div>
                    <li><Link className="fond-semibold text-white" t0='/'><FaHome></FaHome>Home</Link></li>
                    <li><Link className="fond-semibold text-white" t0='/dashboard/menu'><FaBars></FaBars>Menu</Link></li>
                    <li><Link className="fond-semibold text-white" t0='/dashboard/shoppong'><FaShopify></FaShopify>Shopping</Link></li>
                    <li><Link className="fond-semibold text-white" t0='/dashboard/contact'><FaMailBulk></FaMailBulk>Contact</Link></li>
                </ul>

            </div>
        </div >

    );
};

export default DashBoard;
