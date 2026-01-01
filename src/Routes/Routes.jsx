import { createBrowserRouter } from "react-router-dom";
import Layout from "./LayOut";
import { Children } from "react";
import Home from "../Pages/Home";
import AboutUsPage from "../Pages/AbouteUs";
import ContactUs from "../Pages/ContactUs";
import LoginPage from "../Pages/LogIn";
import RegisterPage from "../Pages/RegisterPage";
import UserAccountes from "../Components/Forms/UserAccountes";
import EmployeeFRM from "../Components/Employees/EmployeeFRM";
import EployeeAcording from "../Components/Employees/EployeeAcording";
import Dashboared from "../Components/Dashboared";
import ReceiptVoucher from "../components/economy/ReceiptVoucher";
import MonyBoxs from "../components/economy/MonyBoxs"

const router=[
        {path:"/",
            element:<Layout />,
            children:[
                {index:true ,element :<Home />},
                {path:'home',element:<Home />},
                {path:'Employees',element:<EmployeeFRM />},
                {path:'about',element:<AboutUsPage />},
                {path:"contact",element:<ContactUs />},
                {path:'login',element:<LoginPage />},
                {path:'register',element:<RegisterPage />},
                {path:'dashboard',element:<Dashboared />},
                {path:'employeeAc',element:<EployeeAcording />},
                {path:'ReceiptVoucher',element:<ReceiptVoucher />},
                {path:'MonyBoxs',element:<MonyBoxs />},
                {path: "*", element: <h2>Not Found</h2> },
                

            ]
        }
]
const routes = createBrowserRouter(router);

export { router };

export default routes;