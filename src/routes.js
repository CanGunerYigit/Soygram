import AuthLayout from "pages/auth";
import Home from "pages/home";
import Login from "pages/auth/login";
import PrivateRoute from "components/PrivateRoute";
import Register from "pages/auth/register";

const routes=[
    {
        path:"/",
        element:<Home></Home>,
        auth: true
    },
    {
        path:"/auth",
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element: <Register/>
            }
        ]
    }
]
const authCheck= routes=>routes.map(route=> {
    if(route?.auth){
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if(route?.children){
        route.children = authCheck(route.children)    //anasayfaya girdiğinde otomatik olarak login sayfasına yönlendirecek
    }
    return route
})
export default authCheck(routes)