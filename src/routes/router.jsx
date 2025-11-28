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
import Payment from "../pages/dashboard/payment/Payment";
import PaymentSuccessful from "../pages/dashboard/payment/PaymentSuccessful";
import PaymentCancel from "../pages/dashboard/payment/PaymentCancel";
import PaymentHistory from "../pages/dashboard/paymentHistory/PaymentHistory";
import ApproveRider from "../pages/dashboard/approveRider/ApproveRider";
import UsersManagement from "../pages/dashboard/usersManagement/UsersManagement";
import AdminRoute from "../private/AdminRoute";
import DashboardHome from "../pages/dashboard/dashboardHome/DashboardHome";
import AssignRiders from "../pages/dashboard/assignRiders/AssignRiders";
import AssignedParcels from "../pages/dashboard/assignedParcels/AssignedParcels";
import RiderRoute from "../private/RiderRoute";

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
                loader: ()=> fetch('/warehouses.json'),
                hydrateFallbackElement: <Loader></Loader>,
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
                index: true,
                Component: DashboardHome
            },
            {
                path: 'my-parcels',
                Component: MyParcels
            },
            {
                path: 'payment/:parcelId',
                Component: Payment
            },
            {
                path: 'payment-success',
                Component: PaymentSuccessful
            },
            {
                path: 'payment-cancel',
                Component: PaymentCancel
            },
            {
                path: 'payment-history',
                Component: PaymentHistory
            },
            {
                path: 'approve-rider',
                element: <AdminRoute><ApproveRider></ApproveRider></AdminRoute>
            },
            {
                path: 'users-management',
                element: <AdminRoute><UsersManagement></UsersManagement></AdminRoute>
            },
            {
                path: 'assign-rider',
                element: <AdminRoute><AssignRiders></AssignRiders></AdminRoute>
            },
            {
                path: 'assigned-parcels',
                element: <RiderRoute><AssignedParcels></AssignedParcels></RiderRoute>
            }
        ]
    }
])

export default router;