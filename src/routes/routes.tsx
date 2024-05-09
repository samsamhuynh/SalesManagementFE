import { DASHBOARD_PAGE, LOGIN_PAGE } from "../constants";
import Layout from "../layouts";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const routes: {
  path: string;
  element: any;
  isPrivate?: boolean;
  children?: any;
}[] = [
  { path: LOGIN_PAGE, element: <Login /> },
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
