import {
  DASHBOARD_PAGE,
  FORGOTPASSWORD_PAGE,
  LOGIN_PAGE,
  SIGNUP_PAGE,
} from "../constants";
import Layout from "../layouts";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/Login/Forgot Password";
import Login from "../pages/Login/Sign in";
import SignUp from "../pages/Login/Sign up";

const routes: {
  path: string;
  element: any;
  isPrivate?: boolean;
  children?: any;
}[] = [
  { path: LOGIN_PAGE, element: <Login /> },
  { path: SIGNUP_PAGE, element: <SignUp /> },
  { path: FORGOTPASSWORD_PAGE, element: <ForgotPassword /> },
  {
    path: "/",
    element: <Layout />,
    isPrivate: true,
    children: [
      {
        path: DASHBOARD_PAGE,
        name: "Dashboard",
        element: <Dashboard />,
        isPrivate: true,
      },
    ],
  },
];

export default routes;
