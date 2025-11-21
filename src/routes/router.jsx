import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/home/home/Home";
import Coverage from "../pages/coverage/Coverage";
import NotFound from "../pages/notFound/NotFound";
import About from "../pages/about/About";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Loader from "../components/loader/Loader";
import Private from "../private/Private";
import Rider from "../pages/rider/Rider";
import SendParcel from "../pages/sendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/dashboard/myParcels/MyParcels";

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
                hydrateFallbackElement: <Loader></Loader>,
                Component: Coverage
            },
            {
                path: "*",
                Component: NotFound
            },
            {
                path: 'about-us',
                Component: About
            },
            {
                path: 'rider',
                element: <Private><Rider></Rider></Private>
            },
            {
                path: 'send-parcel',
                loader: ()=> fetch('/warehouses.json'),
                hydrateFallbackElement: <Loader></Loader>,
                element: <Private><SendParcel></SendParcel></Private>
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
    },
    {
        path: 'dashboard',
        element: <Private><DashboardLayout></DashboardLayout></Private>,
        children: [
            {
                path: 'my-parcels',
                Component: MyParcels
            }
        ]
    }
])

export default router;