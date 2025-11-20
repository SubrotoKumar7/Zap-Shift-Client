import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/home/home/Home";
import Coverage from "../pages/coverage/Coverage";
import NotFound from "../pages/notFound/NotFound";
import About from "../pages/about/About";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/coverage',
                loader: ()=> fetch('/warehouses.json'),
                Component: Coverage
            },
            {
                path: "*",
                Component: NotFound
            },
            {
                path: 'about-us',
                Component: About
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    }
])

export default router;