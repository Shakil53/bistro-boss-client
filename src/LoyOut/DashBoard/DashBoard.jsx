import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome, FaCalendar, FaReceipt, FaWallet, FaBars, FaShopify, FaMailBulk, } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const DashBoard = () => {
    const [cart] = useCart()
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

                    <li><NavLink t0='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink t0='/dashboard/reservations'><FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <li><NavLink t0='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart <div className="badge badge-secondary">+{cart?.length || 0}</div></NavLink></li>
                    <li><NavLink to='/'><FaReceipt></FaReceipt>My Booking</NavLink></li>
                    {/* <li><NavLink to='/'><FaComments></FaComments>My Review</NavLink></li> */}
                    <div className="divider"></div>
                    <li><NavLink t0='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink t0='/dashboard/menu'><FaBars></FaBars>Menu</NavLink></li>
                    <li><NavLink t0='/dashboard/shoppong'><FaShopify></FaShopify>Shopping</NavLink></li>
                    <li><NavLink t0='/dashboard/contact'><FaMailBulk></FaMailBulk>Contact</NavLink></li>
                </ul>

            </div>
        </div >

    );
};

export default DashBoard;
