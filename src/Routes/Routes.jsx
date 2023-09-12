import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../LoyOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Home/Menu/Menu";
import Order from "../Pages/Home/Home/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }

        ]
    },
]);