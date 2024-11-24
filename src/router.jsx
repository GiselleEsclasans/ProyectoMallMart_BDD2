
import { routes } from './constants/routes';
import {createBrowserRouter} from "react-router-dom";
import Root from './layout/Roots.jsx';

import Home from "./pages/HomePage.jsx";
import Products from "./pages/Products.jsx";
import Product from "./pages/Product.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/register.jsx";
import Error from "./pages/Error.jsx";
import Account from "./pages/Account.jsx";
import Cart from "./pages/Cart.jsx";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
              path: routes[0].path,
              element: <Home />,
            },
            {
                path: routes[1].path, 
                element: <Products />,
               
                    
            
            },
            {
                path: routes[1]["children"][0].path, 
                element: <Product />,
            },
            {
                path: routes[2].path,
                element: <Register />,
            },
            {
                path: routes[3].path,
                element: <Error />
            },
            {
                path: routes[4].path,
                element: <Account />
            },
            {
                path: routes[5].path,
                element: <Cart />
            },
            {
                path: routes[6].path,
                element: <Login />
            },
        ]
       

    }

])

