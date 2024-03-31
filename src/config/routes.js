import LoginScreen  from "../Screen/Login/LoginScreen";
import RegisterScreen from "../Screen/Register/RegisterScreen";
import {createBrowserRouter} from "react-router-dom";
import Test from "../Screen/Test/Test";
import  "../utils/rem.js";

const routes =  createBrowserRouter([
        {
            path: "/",
            element: <LoginScreen />,
        },
        {
            path: "/login",
            element: <LoginScreen />,
        },
        {
            path: "/register",
            element: <RegisterScreen />,
        },
        {
            path: "/about",
            element: <Test />,
        },
        {
            path: "/privacy",
            element: <div>Privacy Policy</div>,
        },
        {
            path:"/home/{id}",
            element:<div>Home</div>
        },
        {

            path: "*",
            element: <div>404 Not Found</div>,
        }
]);
export default routes;